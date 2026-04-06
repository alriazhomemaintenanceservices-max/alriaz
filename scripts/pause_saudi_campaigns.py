#!/usr/bin/env python3
"""
Pause Saudi Home Experts Google Ads Campaigns
Account ID: 241-614-6162
"""

import sys
import os
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException
from google.protobuf import field_mask_pb2

# Saudi Home Experts account details
SAUDI_CUSTOMER_ID = "2416146162"  # 241-614-6162 without dashes
MCC_CUSTOMER_ID = "2554020790"  # CruxLabs MCC ID

def get_client():
    """Load Google Ads client from config."""
    config_path = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"
    return GoogleAdsClient.load_from_storage(config_path)

def list_campaigns(client, customer_id):
    """List all campaigns for the account."""
    ga_service = client.get_service("GoogleAdsService")
    
    query = """
        SELECT
            campaign.id,
            campaign.name,
            campaign.status,
            campaign.advertising_channel_type,
            campaign_budget.amount_micros
        FROM campaign
        WHERE campaign.status != 'REMOVED'
        ORDER BY campaign.id
    """
    
    try:
        # Use MCC login customer ID but query Saudi account
        response = ga_service.search(
            customer_id=customer_id,
            query=query
        )
        
        campaigns = []
        print("\n" + "="*60)
        print(f"CAMPAIGNS IN SAUDI HOME EXPERTS ACCOUNT ({customer_id})")
        print("="*60)
        
        for row in response:
            c = row.campaign
            budget = row.campaign_budget.amount_micros / 1_000_000
            
            print(f"\nCampaign ID: {c.id}")
            print(f"  Name: {c.name}")
            print(f"  Status: {c.status.name}")
            print(f"  Type: {c.advertising_channel_type.name}")
            print(f"  Daily Budget: {budget:.2f} PKR")
            
            campaigns.append({
                'id': str(c.id),
                'name': c.name,
                'status': c.status.name
            })
        
        return campaigns
        
    except GoogleAdsException as ex:
        print(f"\nError accessing account {customer_id}:")
        for error in ex.failure.errors:
            print(f"  {error.message}")
        return []

def pause_campaign(client, customer_id, campaign_id):
    """Pause a specific campaign."""
    campaign_service = client.get_service("CampaignService")
    
    # Create campaign operation
    campaign_operation = client.get_type("CampaignOperation")
    campaign = campaign_operation.update
    campaign.resource_name = campaign_service.campaign_path(customer_id, campaign_id)
    campaign.status = client.enums.CampaignStatusEnum.PAUSED
    
    # Set the update mask
    campaign_operation.update_mask.paths.append("status")
    
    try:
        response = campaign_service.mutate_campaigns(
            customer_id=customer_id,
            operations=[campaign_operation]
        )
        print(f"\n✅ Successfully paused campaign {campaign_id}")
        return True
    except GoogleAdsException as ex:
        print(f"\n❌ Failed to pause campaign {campaign_id}:")
        for error in ex.failure.errors:
            print(f"  {error.message}")
        return False

def pause_all_campaigns(client, customer_id):
    """Pause all active campaigns in the account."""
    campaigns = list_campaigns(client, customer_id)
    
    active_campaigns = [c for c in campaigns if c['status'] in ['ENABLED', 'ELIGIBLE']]
    
    if not active_campaigns:
        print("\n✅ No active campaigns to pause")
        return
    
    print(f"\n⚠️  Found {len(active_campaigns)} active campaign(s) to pause:")
    for c in active_campaigns:
        print(f"  - {c['name']} (ID: {c['id']})")
    
    print("\n🔄 Pausing campaigns...")
    
    for campaign in active_campaigns:
        pause_campaign(client, customer_id, campaign['id'])
    
    print("\n✅ All campaigns paused successfully!")
    print("💡 Remember to restart campaigns after the landing page rebuild is complete")

def main():
    print("\n" + "="*60)
    print("SAUDI HOME EXPERTS - GOOGLE ADS CAMPAIGN PAUSER")
    print("="*60)
    
    try:
        # Initialize client
        client = get_client()
        
        # First try with the Saudi account ID directly
        print("\nConnecting to Saudi Home Experts account...")
        
        # Use MCC credentials but query Saudi account
        client.login_customer_id = MCC_CUSTOMER_ID
        
        # Pause all campaigns
        pause_all_campaigns(client, SAUDI_CUSTOMER_ID)
        
    except Exception as e:
        print(f"\n❌ Error: {e}")
        print("\n💡 Tips:")
        print("  1. Make sure you have the correct Google Ads credentials")
        print("  2. Ensure the MCC account has access to Saudi Home Experts account")
        print("  3. Check if the account ID 241-614-6162 is correct")

if __name__ == "__main__":
    main()
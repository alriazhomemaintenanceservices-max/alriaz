#!/usr/bin/env python3
"""Check account status and permissions."""

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

SAUDI_CUSTOMER_ID = "2416146162"
MCC_CUSTOMER_ID = "2554020790"
CONFIG_PATH = "/Users/mawais/Developer/ChauffeurTop-Revamp-main/google-ads.yaml"

def main():
    client = GoogleAdsClient.load_from_storage(CONFIG_PATH)
    client.login_customer_id = MCC_CUSTOMER_ID
    ga_service = client.get_service("GoogleAdsService")

    # Check account details
    query = """
        SELECT
            customer.id,
            customer.descriptive_name,
            customer.currency_code,
            customer.time_zone,
            customer.status,
            customer.manager,
            customer.test_account
        FROM customer
        LIMIT 1
    """
    try:
        response = ga_service.search(customer_id=SAUDI_CUSTOMER_ID, query=query)
        for row in response:
            c = row.customer
            print(f"Account ID: {c.id}")
            print(f"Name: {c.descriptive_name}")
            print(f"Currency: {c.currency_code}")
            print(f"Timezone: {c.time_zone}")
            print(f"Status: {c.status.name}")
            print(f"Is Manager: {c.manager}")
            print(f"Test Account: {c.test_account}")
    except GoogleAdsException as ex:
        for error in ex.failure.errors:
            print(f"Error: {error.message}")

    # Check billing status
    print("\nChecking billing...")
    query2 = """
        SELECT
            billing_setup.id,
            billing_setup.status,
            billing_setup.payments_account
        FROM billing_setup
    """
    try:
        response2 = ga_service.search(customer_id=SAUDI_CUSTOMER_ID, query=query2)
        for row in response2:
            bs = row.billing_setup
            print(f"Billing ID: {bs.id}")
            print(f"Billing Status: {bs.status.name}")
            print(f"Payments Account: {bs.payments_account}")
    except GoogleAdsException as ex:
        for error in ex.failure.errors:
            print(f"Billing error: {error.message}")

    # Check existing campaigns
    print("\nExisting campaigns:")
    query3 = """
        SELECT campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type
        FROM campaign WHERE campaign.status != 'REMOVED'
    """
    try:
        response3 = ga_service.search(customer_id=SAUDI_CUSTOMER_ID, query=query3)
        for row in response3:
            c = row.campaign
            print(f"  {c.name} | {c.status.name} | {c.advertising_channel_type.name}")
    except GoogleAdsException as ex:
        for error in ex.failure.errors:
            print(f"Campaign error: {error.message}")

    # Check MCC link
    print("\nMCC link status:")
    query4 = """
        SELECT
            customer_manager_link.manager_customer,
            customer_manager_link.status
        FROM customer_manager_link
    """
    try:
        response4 = ga_service.search(customer_id=SAUDI_CUSTOMER_ID, query=query4)
        for row in response4:
            link = row.customer_manager_link
            print(f"  Manager: {link.manager_customer} | Status: {link.status.name}")
    except GoogleAdsException as ex:
        for error in ex.failure.errors:
            print(f"Link error: {error.message}")


if __name__ == "__main__":
    main()

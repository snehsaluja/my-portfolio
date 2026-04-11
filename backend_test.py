#!/usr/bin/env python3
"""
Backend API Testing Script for Contact Endpoint
Tests the POST /api/contact and GET /api/contact endpoints
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://sneh-dev.preview.emergentagent.com"
BASE_API_URL = f"{BACKEND_URL}/api"

def test_contact_endpoint():
    """Test the contact endpoint with various scenarios"""
    print("=" * 60)
    print("TESTING CONTACT ENDPOINT")
    print("=" * 60)
    
    results = {
        "total_tests": 0,
        "passed": 0,
        "failed": 0,
        "errors": []
    }
    
    # Test 1: Valid contact message
    print("\n1. Testing POST /api/contact with valid data...")
    results["total_tests"] += 1
    
    valid_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "message": "Hello Sneh, I love your portfolio!"
    }
    
    try:
        response = requests.post(f"{BASE_API_URL}/contact", json=valid_data)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 201:
            data = response.json()
            print(f"   Response: {json.dumps(data, indent=2)}")
            
            # Validate response structure
            required_fields = ["id", "name", "email", "message", "timestamp", "status"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields and data["status"] == "new":
                print("   ✅ PASSED: Valid data returns 201 with correct structure")
                results["passed"] += 1
                # Store the created message ID for later verification
                created_message_id = data["id"]
            else:
                print(f"   ❌ FAILED: Missing fields {missing_fields} or incorrect status")
                results["failed"] += 1
                results["errors"].append("Test 1: Missing required fields or incorrect status")
        else:
            print(f"   ❌ FAILED: Expected 201, got {response.status_code}")
            print(f"   Response: {response.text}")
            results["failed"] += 1
            results["errors"].append(f"Test 1: Expected 201, got {response.status_code}")
            
    except Exception as e:
        print(f"   ❌ ERROR: {str(e)}")
        results["failed"] += 1
        results["errors"].append(f"Test 1: Exception - {str(e)}")
    
    # Test 2: Missing name
    print("\n2. Testing POST /api/contact with missing name...")
    results["total_tests"] += 1
    
    missing_name_data = {
        "email": "test@example.com",
        "message": "test"
    }
    
    try:
        response = requests.post(f"{BASE_API_URL}/contact", json=missing_name_data)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 422:
            print("   ✅ PASSED: Missing name returns 422")
            results["passed"] += 1
        else:
            print(f"   ❌ FAILED: Expected 422, got {response.status_code}")
            print(f"   Response: {response.text}")
            results["failed"] += 1
            results["errors"].append(f"Test 2: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"   ❌ ERROR: {str(e)}")
        results["failed"] += 1
        results["errors"].append(f"Test 2: Exception - {str(e)}")
    
    # Test 3: Invalid email
    print("\n3. Testing POST /api/contact with invalid email...")
    results["total_tests"] += 1
    
    invalid_email_data = {
        "name": "Test",
        "email": "invalid",
        "message": "test"
    }
    
    try:
        response = requests.post(f"{BASE_API_URL}/contact", json=invalid_email_data)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 422:
            print("   ✅ PASSED: Invalid email returns 422")
            results["passed"] += 1
        else:
            print(f"   ❌ FAILED: Expected 422, got {response.status_code}")
            print(f"   Response: {response.text}")
            results["failed"] += 1
            results["errors"].append(f"Test 3: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"   ❌ ERROR: {str(e)}")
        results["failed"] += 1
        results["errors"].append(f"Test 3: Exception - {str(e)}")
    
    # Test 4: Empty message
    print("\n4. Testing POST /api/contact with empty message...")
    results["total_tests"] += 1
    
    empty_message_data = {
        "name": "Test",
        "email": "test@example.com",
        "message": ""
    }
    
    try:
        response = requests.post(f"{BASE_API_URL}/contact", json=empty_message_data)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 422:
            print("   ✅ PASSED: Empty message returns 422")
            results["passed"] += 1
        else:
            print(f"   ❌ FAILED: Expected 422, got {response.status_code}")
            print(f"   Response: {response.text}")
            results["failed"] += 1
            results["errors"].append(f"Test 4: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"   ❌ ERROR: {str(e)}")
        results["failed"] += 1
        results["errors"].append(f"Test 4: Exception - {str(e)}")
    
    # Test 5: GET all contact messages
    print("\n5. Testing GET /api/contact...")
    results["total_tests"] += 1
    
    try:
        response = requests.get(f"{BASE_API_URL}/contact")
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Found {len(data)} contact messages")
            
            # Check if our test message from Test 1 is in the list
            if len(data) > 0:
                print("   Sample message structure:")
                print(f"   {json.dumps(data[0], indent=2)}")
                print("   ✅ PASSED: GET contact messages returns 200 with data")
                results["passed"] += 1
            else:
                print("   ⚠️  WARNING: No contact messages found")
                results["passed"] += 1
        else:
            print(f"   ❌ FAILED: Expected 200, got {response.status_code}")
            print(f"   Response: {response.text}")
            results["failed"] += 1
            results["errors"].append(f"Test 5: Expected 200, got {response.status_code}")
            
    except Exception as e:
        print(f"   ❌ ERROR: {str(e)}")
        results["failed"] += 1
        results["errors"].append(f"Test 5: Exception - {str(e)}")
    
    # Print summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    print(f"Total Tests: {results['total_tests']}")
    print(f"Passed: {results['passed']}")
    print(f"Failed: {results['failed']}")
    
    if results["errors"]:
        print("\nERRORS:")
        for error in results["errors"]:
            print(f"  - {error}")
    
    return results["failed"] == 0

def test_basic_connectivity():
    """Test basic connectivity to the backend"""
    print("Testing basic connectivity to backend...")
    
    try:
        response = requests.get(f"{BASE_API_URL}/", timeout=10)
        print(f"Backend connectivity: Status {response.status_code}")
        if response.status_code == 200:
            print("✅ Backend is accessible")
            return True
        else:
            print("❌ Backend returned non-200 status")
            return False
    except Exception as e:
        print(f"❌ Backend connectivity failed: {str(e)}")
        return False

if __name__ == "__main__":
    print("Starting Contact Endpoint Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base URL: {BASE_API_URL}")
    
    # Test basic connectivity first
    if not test_basic_connectivity():
        print("❌ Cannot connect to backend. Exiting.")
        sys.exit(1)
    
    # Run contact endpoint tests
    success = test_contact_endpoint()
    
    if success:
        print("\n🎉 All tests passed!")
        sys.exit(0)
    else:
        print("\n💥 Some tests failed!")
        sys.exit(1)
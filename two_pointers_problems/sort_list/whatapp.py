# from twilio.rest import Client
# import time
# # +14155238886

# # Your Twilio credentials
# account_sid = 'ACf32e599a669c22b3de55b65afc926eeb'
# auth_token = '85096204aa3e28d6b8091eaa6d1e3969'
# client = Client(account_sid, auth_token)

# # Your WhatsApp sender and receiver details
# from_whatsapp_number = '+17325583333'  # Twilio sandbox number for WhatsApp
# to_whatsapp_number = '+15185285049'

# # The message you want to send
# message_body = 'Hello! Bhoni I am holy whats up.'

# # Send the message 10 times with a delay in between
# for i in range(10):
#     message = client.messages.create(
#         body=message_body,
#         from_=from_whatsapp_number,
#         to=to_whatsapp_number
#     )
#     print(f"Message {i+1} sent with SID: {message.sid}")
#     time.sleep(2)  # Wait for 2 seconds between messages


import pywhatkit as kit

# The number should be in the format: "+CountryCodePhoneNumber"
phone_number = "+17325583333"  # Replace with the recipient's phone number
message = "Hello, this is a test message from Python!"

# Schedule the message to be sent
# Send message at a specific time: for example, at 15:30
kit.sendwhatmsg(phone_number, message, 1, 00)

print("Message scheduled successfully!")

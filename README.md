# 💳 Paystack Payment Integration (Webhook)

This project integrates **Paystack payments** with a backend server to handle transactions securely.  
It listens for **webhook events** from Paystack, verifies their signatures, and updates a user’s wallet balance in the database.

---

## 🚀 Features
- ✅ Secure Paystack **webhook verification** using HMAC-SHA512 signatures  
- ✅ Automatic **wallet credit** on successful charges  
- ✅ Transaction history logging for users  
- ✅ Uses **Express.js** and **MongoDB** with Mongoose  
- ✅ Middleware to handle raw request body (required by Paystack)  

---

## 📂 Project Structure

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/EMMANUEL08161823021/Paystack-Payment.git
cd paystack-integration

2. Install Dependencies
npm install

3. Environment Variables

Create a .env file in the backend folder:

PAYSTACK_SECRET_KEY=your_paystack_secret_key
MONGO_URI=your_mongodb_connection_string


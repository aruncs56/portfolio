I'll create comprehensive wireframes for a taxi driver app MVP that serves both drivers and passengers. This dual-purpose approach provides maximum value and covers the most essential workflows.

## 📱 **Taxi Driver App MVP - Wireframes & API Structure**

### **1. WELCOME & AUTHENTICATION SCREENS**

```
┌─────────────────────────────────────┐
│           WELCOME SCREEN            │
├─────────────────────────────────────┤
│                                     │
│         🚖 TaxiConnect              │
│      Your Ride, Your Way            │
│                                     │
│     [Drive with us] [Find a ride]   │
│                                     │
│         Login  |  Register          │
│                                     │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│          LOGIN/REGISTER             │
├─────────────────────────────────────┤
│                                     │
│    📱 Phone Number                  │
│    [+1 (___) ___-____]             │
│                                     │
│    🔐 Password                      │
│    [________________]               │
│                                     │
│    👤 I am a:                       │
│    ○ Driver    ○ Passenger          │
│                                     │
│         [Continue]                  │
│                                     │
│    Don't have account? Sign up      │
│                                     │
└─────────────────────────────────────┘
```

### **2. DRIVER SCREENS**

```
┌─────────────────────────────────────┐
│         DRIVER DASHBOARD            │
├─────────────────────────────────────┤
│  👤 John Driver    💰 $127.50  ⚙️  │
├─────────────────────────────────────┤
│                                     │
│    Status: [●●● GO ONLINE ●●●]      │
│           [●●● GO OFFLINE ●●●]      │
│                                     │
│    📍 Current Location              │
│    Downtown Area, Main St           │
│                                     │
│    📊 Today's Summary               │
│    ├─ Trips: 8                     │
│    ├─ Hours: 6.5                   │
│    └─ Earnings: $127.50            │
│                                     │
│    📋 Recent Activity               │
│    ├─ Trip to Airport - $25.00     │
│    ├─ Trip to Mall - $15.50        │
│    └─ Trip to Hospital - $18.00    │
│                                     │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│          RIDE REQUEST               │
├─────────────────────────────────────┤
│                                     │
│    🎯 NEW RIDE REQUEST              │
│                                     │
│    👤 Sarah M. ⭐ 4.8               │
│                                     │
│    📍 Pickup: 123 Oak Street        │
│    📍 Drop: Airport Terminal 2      │
│                                     │
│    💰 Estimated Fare: $28.50        │
│    🕐 Duration: ~25 min             │
│    📏 Distance: 12.3 miles          │
│                                     │
│    ⏱️ 15 seconds to respond         │
│                                     │
│      [DECLINE]    [ACCEPT]          │
│                                     │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│         ACTIVE RIDE (Driver)        │
├─────────────────────────────────────┤
│  [<] Sarah M. ⭐4.8    [💬] [📞]   │
├─────────────────────────────────────┤
│                                     │
│         [🗺️ MAP VIEW]              │
│    📍 You ──────→ 📍 Pickup        │
│                                     │
│    Status: En route to pickup       │
│    ETA: 4 minutes                   │
│                                     │
│    📍 123 Oak Street                │
│    Apt 2B, Blue building            │
│                                     │
│    💬 "I'm in the blue Honda"       │
│                                     │
│         [NAVIGATE] [ARRIVED]        │
│                                     │
│    📍 Destination: Airport T2       │
│                                     │
└─────────────────────────────────────┘
```

### **3. PASSENGER SCREENS**

```
┌─────────────────────────────────────┐
│        PASSENGER HOME               │
├─────────────────────────────────────┤
│  👤 Sarah M.              🎯 ⚙️    │
├─────────────────────────────────────┤
│                                     │
│    📍 Where to?                     │
│    [Search destination...]          │
│                                     │
│         [🗺️ MAP VIEW]              │
│           📍 You                    │
│                                     │
│    🚗 Ride Options                  │
│    ├─ 🚗 Standard    $15-20  5min  │
│    ├─ 🚙 Comfort     $18-25  3min  │
│    └─ 🚐 XL          $22-30  8min  │
│                                     │
│    📋 Recent Destinations           │
│    ├─ 🏠 Home - Oak Street         │
│    ├─ ✈️ Airport Terminal          │
│    └─ 🏢 Work - Downtown           │
│                                     │
│         [BOOK RIDE]                 │
│                                     │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│          RIDE BOOKING               │
├─────────────────────────────────────┤
│  [<] Book Ride                      │
├─────────────────────────────────────┤
│                                     │
│    📍 Pickup Location               │
│    123 Oak Street, Apt 2B           │
│                                     │
│    📍 Destination                   │
│    Airport Terminal 2               │
│                                     │
│    🚗 Standard Ride                 │
│    💰 $25-30  🕐 25 min  📏 12mi    │
│                                     │
│    💳 Payment Method                │
│    💳 •••• 1234  [Change]          │
│                                     │
│    📝 Special Instructions          │
│    [Add note for driver...]         │
│                                     │
│    👥 Ride for: Just me  [Change]   │
│                                     │
│         [CONFIRM BOOKING]           │
│                                     │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│        FINDING DRIVER               │
├─────────────────────────────────────┤
│  [<] Finding your ride...           │
├─────────────────────────────────────┤
│                                     │
│    🔍 Looking for nearby drivers    │
│                                     │
│         [🗺️ MAP VIEW]              │
│      🚗     📍You    🚗            │
│                                     │
│    ⏱️ Estimated wait: 3-5 minutes   │
│                                     │
│    💡 Tip: Be ready at pickup       │
│       location for faster service   │
│                                     │
│                                     │
│         [CANCEL BOOKING]            │
│                                     │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│       ACTIVE RIDE (Passenger)       │
├─────────────────────────────────────┤
│  👤 Driver: John D. ⭐4.9 [💬][📞] │
│  🚗 Honda Civic - ABC 123           │
├─────────────────────────────────────┤
│                                     │
│         [🗺️ MAP VIEW]              │
│    📍 Driver ──────→ 📍 You        │
│                                     │
│    Status: Driver en route          │
│    ETA: 2 minutes                   │
│                                     │
│    💬 "I'm in the blue Honda"       │
│                                     │
│    📍 Pickup: 123 Oak Street        │
│    📍 Drop: Airport Terminal 2      │
│                                     │
│    💰 Estimated Fare: $28.50        │
│                                     │
│    🆘 [Emergency] [Share Trip]      │
│                                     │
└─────────────────────────────────────┘
```

### **4. SHARED SCREENS**

```
┌─────────────────────────────────────┐
│         RIDE COMPLETION             │
├─────────────────────────────────────┤
│                                     │
│    ✅ Trip Completed!               │
│                                     │
│    📍 From: 123 Oak Street          │
│    📍 To: Airport Terminal 2        │
│                                     │
│    💰 Total Fare: $28.50            │
│    🕐 Duration: 24 minutes          │
│    📏 Distance: 12.1 miles          │
│                                     │
│    💳 Paid via •••• 1234           │
│                                     │
│    ⭐ Rate your ride                │
│    ⭐⭐⭐⭐⭐                        │
│                                     │
│    💬 Leave feedback (optional)     │
│    [Great service, on time!]        │
│                                     │
│         [DONE] [BOOK AGAIN]         │
│                                     │
└─────────────────────────────────────┘
```

```
┌─────────────────────────────────────┐
│            PROFILE                  │
├─────────────────────────────────────┤
│  [<] Settings                       │
├─────────────────────────────────────┤
│                                     │
│    👤 John Driver                   │
│    john.driver@email.com            │
│    +1 (555) 123-4567               │
│                                     │
│    📊 Account                       │
│    ├─ 🚗 Vehicle Details           │
│    ├─ 💳 Payment Methods           │
│    ├─ 📋 Trip History              │
│    └─ ⭐ Ratings (4.9)             │
│                                     │
│    ⚙️ Settings                      │
│    ├─ 📱 Notifications             │
│    ├─ 🔐 Privacy & Security        │
│    ├─ ℹ️ Help & Support            │
│    └─ 📄 Legal                     │
│                                     │
│         [LOGOUT]                    │
│                                     │
└─────────────────────────────────────┘
```

## 🔧 **API ENDPOINTS STRUCTURE**

### **Authentication APIs**
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
POST /api/auth/refresh-token
```

### **User Management APIs**
```
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/users/upload-avatar
GET    /api/users/payment-methods
POST   /api/users/payment-methods
DELETE /api/users/payment-methods/{id}
```

### **Driver-Specific APIs**
```
POST /api/drivers/status          # Go online/offline
GET  /api/drivers/status
POST /api/drivers/location        # Update location
GET  /api/drivers/earnings
GET  /api/drivers/trip-history
POST /api/drivers/vehicle         # Vehicle details
GET  /api/drivers/ride-requests   # Pending requests
```

### **Ride Management APIs**
```
POST   /api/rides/request         # Passenger creates ride
GET    /api/rides/{id}
PUT    /api/rides/{id}/accept     # Driver accepts
PUT    /api/rides/{id}/decline    # Driver declines
PUT    /api/rides/{id}/start      # Start trip
PUT    /api/rides/{id}/complete   # Complete trip
POST   /api/rides/{id}/cancel     # Cancel ride
GET    /api/rides/active          # Current active ride
GET    /api/rides/history         # Trip history
```

### **Location & Matching APIs**
```
POST /api/location/update         # Real-time location
GET  /api/location/nearby-drivers # Find drivers
POST /api/rides/estimate-fare     # Calculate fare
GET  /api/rides/track/{id}        # Real-time tracking
```

### **Communication APIs**
```
POST /api/messages/send           # In-app messaging
GET  /api/messages/{ride_id}      # Get chat history
POST /api/calls/initiate          # Start call
```

### **Rating & Feedback APIs**
```
POST /api/rides/{id}/rate         # Rate ride
GET  /api/users/{id}/ratings      # Get user ratings
POST /api/feedback                # Submit feedback
```

### **Payment APIs**
```
POST /api/payments/process        # Process payment
GET  /api/payments/history        # Payment history
POST /api/payments/refund         # Issue refund
GET  /api/payments/methods        # Payment methods
```

### **Real-time WebSocket Events**
```
DRIVER_LOCATION_UPDATE
RIDE_REQUEST_RECEIVED
RIDE_ACCEPTED
RIDE_STARTED
RIDE_COMPLETED
DRIVER_ARRIVED
MESSAGE_RECEIVED
```

## 📊 **Database Schema Requirements**

### **Core Tables:**
1. **users** - Basic user info, authentication
2. **drivers** - Driver-specific data, vehicle info, status
3. **passengers** - Passenger preferences, payment methods
4. **rides** - Ride requests, status, fare details
5. **locations** - Real-time location tracking
6. **payments** - Payment transactions
7. **ratings** - Driver/passenger ratings
8. **messages** - In-app communication

This MVP wireframe structure provides a complete foundation for building a competitive taxi driver app with all essential features for both drivers and passengers!
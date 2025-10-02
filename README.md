# 🍕 FoodApp - React Native Food Delivery App

A modern, feature-rich food delivery application built with React Native, Redux, and TypeScript. This app provides a complete food ordering experience with a beautiful UI, cart management, and detailed product information.

## 🚀 Features

### 🏠 **Product List Screen**
- **Vendor Information**: Restaurant details with banner, logo, rating, and operating hours
- **Product Catalog**: Browse through 100+ food items across multiple categories (Pizza, Asian, American, Indian)
- **Rich Product Cards**: Each item displays:
  - High-quality product images
  - Veg/Non-veg indicators (green/red dots)
  - Product names and descriptions
  - Ratings with star icons
  - Pricing information
- **Add to Cart**: Quick add/remove functionality with quantity controls
- **Lazy Loading**: Pagination with 10 items per page for smooth performance
- **Real-time Cart Updates**: Live cart count and total updates

### 📱 **Product Detail Screen**
- **Large Product Images**: Full-width, high-resolution product photos
- **Comprehensive Information**:
  - Product name and category
  - Detailed descriptions for all menu items
  - Star ratings and pricing
  - Veg/Non-veg classification with visual indicators
- **Smart Cart Integration**:
  - Add to Cart button (when item not in cart)
  - Quantity controls with total calculation (when item in cart)
  - Real-time price updates
  - Stock status validation

### 🛒 **Cart Screen**
- **Complete Cart Management**:
  - List all cart items with images and details
  - Individual quantity controls for each item
  - Remove items with confirmation dialogs
  - Clear entire cart functionality
- **Order Summary**:
  - Itemized subtotal calculation
  - Delivery fee ($3.00)
  - Tax calculation (10%)
  - Grand total with all charges
- **Checkout Process**: Ready-to-implement checkout button
- **Empty State**: Friendly empty cart message with call-to-action

### 🎨 **Design & UX**
- **Modern UI**: Clean, professional design with consistent color scheme
- **Responsive Layout**: Optimized for different screen sizes
- **Visual Hierarchy**: Proper typography and spacing throughout
- **Smooth Animations**: Native-like transitions and interactions
- **Accessibility**: Proper contrast ratios and touch targets

## 🛠 Tech Stack

### **Core Technologies**
- **React Native**: Cross-platform mobile development
- **TypeScript**: Type-safe development
- **Redux Toolkit**: State management
- **React Navigation**: Navigation system

### **Key Libraries**
- **react-native-size-matters**: Responsive design scaling
- **react-native-fast-image**: Optimized image loading
- **@reduxjs/toolkit**: Modern Redux state management
- **AsyncStorage**: Local data persistence

### **Development Tools**
- **Metro**: JavaScript bundler
- **Flipper**: Debugging and development
- **ESLint**: Code linting
- **Prettier**: Code formatting

## 📁 Project Structure

```
src/
├── Components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header
│   ├── TextContainer.tsx # Styled text component
│   ├── WrapperContainer.tsx # Screen wrapper
│   └── CartSummary.tsx  # Cart summary widget
├── Screens/             # App screens
│   ├── ProductList/     # Product listing screen
│   ├── ProductDetail/   # Product detail screen
│   └── CartScreen/      # Shopping cart screen
├── navigation/          # Navigation configuration
│   ├── MainStack.tsx    # Main navigation stack
│   ├── TabRoutes.tsx    # Tab navigation
│   └── Routes.tsx       # Route definitions
├── redux/               # State management
│   ├── store.ts         # Redux store configuration
│   ├── actions/         # Action creators
│   └── reducers/        # Redux reducers
├── constants/           # App constants
│   ├── extra.js         # Product data and descriptions
│   ├── imagePath.ts     # Image asset paths
│   └── navigationsStrings.ts # Navigation constants
├── styles/              # Global styles
│   └── colors.ts        # Color palette
├── assets/              # Static assets
│   └── images/          # App images and icons
└── utils/               # Utility functions
    └── storage.ts       # AsyncStorage helpers
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **React Native CLI** or **Expo CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd FoodApp
```

2. **Install dependencies**
```bash
npm install
# OR
yarn install
```

3. **iOS Setup** (macOS only)
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

4. **Start Metro Server**
```bash
npm start
# OR
yarn start
```

5. **Run the app**

**For Android:**
```bash
npm run android
# OR
yarn android
```

**For iOS:**
```bash
npm run ios
# OR
yarn ios
```

## 📊 Data Management

### **Product Data**
- **100+ Food Items**: Diverse menu across 4 categories
- **Rich Descriptions**: Professional, appetizing product descriptions
- **Vegetarian Classification**: 10 vegetarian items clearly marked
- **Dynamic Pricing**: Randomized pricing between $6.99-$15.99
- **Stock Management**: Random stock availability simulation

### **Cart Persistence**
- **AsyncStorage**: Cart data persists between app sessions
- **Real-time Sync**: Automatic synchronization across screens
- **State Management**: Redux for consistent state handling

## 🎯 Key Features Implementation

### **State Management**
- **Redux Toolkit**: Modern Redux implementation
- **Persistent Cart**: Cart data saved to device storage
- **Real-time Updates**: Live cart updates across all screens

### **Navigation**
- **Stack Navigation**: Smooth screen transitions
- **Tab Navigation**: Bottom tab navigation structure
- **Deep Linking**: Support for navigation parameters

### **Performance Optimizations**
- **Lazy Loading**: Paginated product loading
- **Image Optimization**: Fast image loading with caching
- **Memory Management**: Efficient component rendering

## 🔧 Configuration

### **Environment Setup**
1. Follow the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide
2. Ensure all required SDKs and tools are installed
3. Configure device/emulator for testing

### **Development**
- **Hot Reload**: Enabled by default for rapid development
- **Debugging**: Flipper integration for advanced debugging
- **Testing**: Jest configuration for unit testing

## 🎨 Customization

### **Colors & Theming**
- **Color Palette**: Centralized in `src/styles/colors.ts`
- **Consistent Theming**: Used throughout the app
- **Easy Customization**: Change colors in one place

### **Product Data**
- **Centralized Data**: All product information in `src/constants/extra.js`
- **Easy Updates**: Add/modify products, descriptions, and categories
- **Extensible Structure**: Easy to add new product properties

## 🚀 Deployment

### **Android**
```bash
cd android
./gradlew assembleRelease
```

### **iOS**
1. Open `ios/FoodApp.xcworkspace` in Xcode
2. Select your team and provisioning profile
3. Build and archive for App Store distribution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Native Community**: For the amazing framework and tools
- **Redux Toolkit**: For simplified state management
- **Design Inspiration**: Modern food delivery app interfaces

---

**Built with ❤️ using React Native**

For questions or support, please open an issue on GitHub.

# Prima - Hospital Management Information System

A modern, comprehensive Hospital Management Information System designed to streamline caregiver management, patient care coordination, and hospital operations. Built with React and Vite for optimal performance and user experience.

## Purpose

Prima HMIS aims to revolutionize healthcare management by providing healthcare facilities with powerful tools to:
- Efficiently manage and schedule caregivers
- Optimize patient-caregiver assignments
- Track caregiver performance and availability
- Streamline communication between healthcare staff
- Generate insightful reports for better decision-making
- Ensure compliance with healthcare regulations

## Key Features

### Caregiver Management
- **Staff Scheduling**: Advanced scheduling system with shift management
- **Skill Tracking**: Maintain detailed caregiver qualifications and certifications
- **Performance Analytics**: Monitor caregiver efficiency and patient outcomes
- **Availability Management**: Real-time tracking of caregiver availability

### Patient Care Coordination
- **Smart Assignment**: AI-assisted patient-caregiver matching based on skills and workload
- **Care Plans**: Digital care plan management and tracking
- **Progress Monitoring**: Real-time patient progress tracking and reporting
- **Emergency Response**: Quick caregiver mobilization for critical situations

### Reporting & Analytics
- **Operational Reports**: Comprehensive reports on hospital operations
- **Performance Metrics**: Key performance indicators and analytics dashboards
- **Compliance Tracking**: Ensure adherence to healthcare regulations
- **Resource Optimization**: Data-driven insights for better resource allocation

### Communication Tools
- **Internal Messaging**: Secure communication between healthcare staff
- **Shift Handovers**: Structured handoff procedures and documentation
- **Emergency Alerts**: Instant notification system for critical situations
- **Multi-language Support**: Support for diverse healthcare environments

## Technology Stack

- **Frontend**: React 18 with Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for modern, responsive design
- **Build Tool**: Vite for lightning-fast development server and builds
- **Code Quality**: ESLint for code linting and consistency
- **State Management**: React hooks for local state management
- **HTTP Client**: Fetch API for API communications

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prima-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable React components
├── pages/          # Page components and routing
├── hooks/          # Custom React hooks
├── services/       # API services and external integrations
├── utils/          # Utility functions and helpers
├── styles/         # Global styles and CSS modules
└── App.jsx         # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

We welcome contributions to Prima HMIS! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/<name>`)
3. Commit your changes (`git commit -m 'some message'`)
4. Push to the branch (`git push origin feature/<name>`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, concise commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## License

This project is proprietary software. All rights reserved.

## Healthcare Compliance

This system is designed to comply with healthcare industry standards including:
- HIPAA compliance for patient data protection
- GDPR compliance for data privacy
- Healthcare interoperability standards
- Medical device regulations where applicable

## Support

For support, questions, or contributions, please contact the development team or create an issue in the repository.


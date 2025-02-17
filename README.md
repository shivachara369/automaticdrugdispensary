


# 💊 **Automatic Drug Dispenser** 🤖

## **About the Project** 📖

The **Automatic Drug Dispenser** is a web-based application that integrates with an automated machine designed to dispense medications based on pre-set schedules and dosages. This project aims to enhance medication adherence by automating the drug dispensing process, ensuring patients take their medications on time and in the correct doses.

Using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) along with **JWT authentication**, this project provides an easy-to-use platform for scheduling medications, receiving reminders, and tracking medication intake. The machine itself is controlled via the web interface, making it possible to manage drug dispensing remotely.

## **Why I Built This Project** 💡

Medication non-adherence is a significant issue in healthcare, often leading to worsened conditions and increased healthcare costs. This project aims to address that problem by providing:
- 🕒 **Timely medication dispensing**: Patients receive their medications on time, preventing missed doses.
- 💊 **Automated drug dispensing**: The machine ensures precise doses of medication are given.
- 📊 **Medication tracking**: Patients and healthcare providers can track drug intake and adherence over time.
- 🧑‍⚕️ **Simplified medication management**: Healthcare providers and pharmacies can manage patient prescriptions more effectively.

By combining software (React.js and Express.js) with hardware (drug dispensing machine), I aimed to create a real-world solution to a pressing healthcare problem.

## **How I Built the Project** 🔧

### **Frontend (React.js)** 💻
The frontend of the Automatic Drug Dispenser is built using **React.js**, which allowed me to develop an interactive, dynamic user interface. The key features include:
- **User Dashboard**: Where users can view their medication schedules, set reminders, and track medication history.
- **User Authentication**: Secure login and registration process using **JWT (JSON Web Tokens)**, ensuring that only authorized users can access the platform.
- **Medication Scheduling**: Users can easily schedule their medication times and dosages.
- **Responsive Design**: The app adjusts to different screen sizes, including mobile, tablet, and desktop views, using basic **HTML** and **CSS**.

### **Backend (Node.js & Express.js)** 🌐
The backend is powered by **Node.js** and **Express.js**, allowing for the creation of a robust RESTful API that handles requests between the frontend and the database. Features of the backend include:
- **REST API**: For managing CRUD operations on users, medication schedules, and logs.
- **JWT Authentication**: Users must authenticate with a JWT token to access their data and manage their schedules.
- **MongoDB**: The database used to store user information, medication schedules, and logs of medications dispensed.

### **Machine Integration (Arduino/ESP8266)** 🤖
The machine component of this project automates the dispensing of medication based on the user’s schedule. The integration between the software and hardware is done via API calls, and the machine performs actions such as:
- **Dispensing Medications**: The machine automatically releases the correct amount of medication at the scheduled time.
- **Servo Motors**: Controlled by the microcontroller to release medication from the designated compartments.
- **Real-Time Communication**: The backend sends signals to the machine to trigger dispensing at the correct time, based on the user’s input.

### **Technologies Used** ⚙️

- **Frontend**:
  - **React.js**: JavaScript library for building dynamic user interfaces.
  - **HTML & CSS**: For structuring and styling the web pages.
  - **Axios**: To send HTTP requests to the backend API.

- **Backend**:
  - **Node.js**: JavaScript runtime for building scalable backend services.
  - **Express.js**: Web framework to create the API.
  - **MongoDB**: Database for storing user data, medication schedules, and logs.
  - **JWT Authentication**: Secure user login and data protection.

- **Machine**:
  - **Arduino/ESP8266**: Used to control the dispensing machine.
  - **Servo Motors**: Used to control compartments and dispense the medication.

- **Version Control**:
  - **Git**: For version control and code management.
  - **GitHub**: To host the repository and track changes.

## **Project Features** 🔑

- **Medication Scheduling**: Users can set medication schedules with specific times and doses.
- **Automatic Drug Dispensing**: The machine automatically dispenses the scheduled medication.
- **Real-time Notifications**: Users receive notifications when it’s time to take their medication.
- **User Authentication**: JWT-secured login and registration process.
- **Responsive Interface**: Designed to be used on desktop, tablet, and mobile devices.

## **How to Run the Project Locally** 🔧

### **Clone the Repository**:

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/your-username/automatic-drug-dispenser.git
   ```

### **Install Dependencies**:

1. Navigate to the project folder:
   ```bash
   cd automatic-drug-dispenser
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

### **Run the Project Locally**:

1. Start the backend server:
   ```bash
   cd server
   npm run start
   ```

2. Start the frontend:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to access the app.

### **Running the Hardware**:

1. Connect the **Arduino/ESP8266** to your computer and upload the dispensing logic code to control the machine.
2. Ensure the machine is connected to the backend API for communication.
3. Test the system by scheduling medications through the frontend and confirming that the machine dispenses the correct dosage.

### **Machine Dispensing (Video)**:

Here is a demonstration of the dispensing process in action:


  https://github.com/user-attachments/assets/c84f1d57-2c43-4205-9319-6a81a99e72f1





https://github.com/user-attachments/assets/90f57503-17ec-4298-bf2f-853c90b92925



## **Challenges and Learnings** 🧠

- **Hardware-Software Integration**: Integrating the hardware with the web application was a challenge, but it taught me how to manage real-time communication between the machine and the backend.
- **User Authentication**: Implementing JWT-based authentication was an insightful experience, ensuring that user data remains secure.
- **Real-Time Scheduling**: Handling real-time notifications and actions from the machine was an interesting challenge that required precise timing and communication.

## **Conclusion** 🏁

The **Automatic Drug Dispenser** project is a great example of integrating both **web development** and **hardware engineering** to solve real-world problems in healthcare. It allowed me to work on a full-stack application that communicates with hardware, making it a valuable learning experience. 

This project not only showcases my technical skills in **MERN Stack development** but also highlights my ability to solve real-world problems with a practical solution that improves patient medication adherence.

---

**Feel free to contribute or contact me for more information!** 🌟

---




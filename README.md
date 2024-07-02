# Elite Building

# Getting Started

First, clone to loacal drive:
- npm init
- npm run dev
  
Open http://localhost:3000 with your browser to see the result.  

# Live Link

 [Live Server](https://elite-building.web.app/)

**Admin username:** <pre>`admin@elite.com`</pre>

**Admin password:** <pre>`Admin1`</pre>


# Technologies
Implemented the following:
-  MongoDB: Employs MongoDB for flexible and scalable data storage.
-  Express.js: Utilizes Express.js for streamlined server-side development.
-  Node.js: Leverages Node.js for scalable and high-performance server applications.
-  React Router: Implements React Router for client-side routing within the application.
-  Firebase Authentication: Integrates Firebase Authentication for user authentication and authorization.
  
# Features
Here some key features of the Elite Building | Building Management System (BMS):

1. **User Authentication and Profile Management:**
   - Users can log in and have their profile picture displayed in the navbar.
   - Logged-in users can access a dropdown menu with options like Dashboard and Logout.
   - User profiles display personal information and rental agreement details if applicable.

2. **Dynamic Home Page:**
   - A navbar with a logo, website name, Home, Apartment, and Login/Profile options.
   - An automatic sliding banner showcasing building or apartment images.
   - A fancy "About the Building" section with detailed typography.
   - A section displaying coupons in a prominent and visually appealing manner.
   - Location details of the apartment with map integration or image.
   - A comprehensive footer with social links and other relevant information.

3. **Apartment Listings:**
   - Display of all apartments with images, floor number, block name, apartment number, rent, and an agreement button.
   - Data storage in the database when a user clicks on the agreement button.
   - Pagination for apartment listings, showing 6 apartments per page.

4. **User Dashboard:**
   - Private route with a dashboard layout.
   - Profile section displaying user details and rental information (if applicable).
   - Announcements section displaying all owner announcements.

5. **Member Dashboard:**
   - Private route with a dashboard layout.
   - Profile section displaying user details, agreement date, and rented apartment info.
   - Payment page with rent details, coupon application, and payment processing.
   - Payment history page with searchable payment records.
   - Announcements section displaying all owner announcements.

6. **Admin Dashboard:**
   - Private route with a dashboard layout.
   - Admin profile section (bonus task).
   - Manage members section displaying all members with remove button functionality.
   - Make announcement page with form fields for title and description.

7. **Agreement Requests Management:**
   - Display all agreement requests with user and apartment details.
   - Accept and reject buttons to change status and user roles.
   - Removal of data after processing the requests.

8. **Coupon Management:**
   - Display all coupons in a tabular form.
   - Modal for adding new coupons with fields for coupon code, discount percentage, and description.
   - Storage of coupon data in the database upon submission.

9. **Payment Integration and Coupon Application:**
   - Members can pay rent through the dashboard.
   - Integration of coupon codes to apply discounts on rent.
   - Payment processing and history tracking.

10. **Announcements System:**
   - Owners can make announcements via the admin dashboard.
   - Display of all announcements to users and members in their respective dashboards.

# NPM Packages
The project utilizes the following NPM packages:
-  AOS Package: Integrates the AOS (Animate On Scroll) library for animating elements on scroll.
-  Swiper Slider: Utilizes the Swiper slider library for creating responsive and touch-enabled sliders in the application.
-  React Awesome Reveal: Utilizes React Awesome Reveal to easily create stunning and customizable reveal animations for elements as they enter the viewport.
-  React Helmet: Incorporates the React Helmet library for managing the document head of the application.
-  Recharts: Implements the Recharts library for creating interactive and visually appealing charts within the application.


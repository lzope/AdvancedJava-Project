import React from 'react';
import Cart from '/Cart';

function CourseSubscriptionButton() {
  const courses = [
    { id: 1, name: 'Course 1', price: '$100' },
    { id: 2, name: 'Course 2', price: '$150' },
    { id: 3, name: 'Course 3', price: '$200' },
  ];

  const handleSubscribe = (course) => {
    // Here, you can add the course to the cart
    // For simplicity, let's just log the course
    console.log('Subscribed to:', course);
  };

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.price}{' '}
            <button onClick={() => handleSubscribe(course)}>Subscribe</button>
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
}

export default CourseSubscriptionButton;

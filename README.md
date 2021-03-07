# Healthy Habits
## Computer Vision Workout Tracker & Habit Builder

### Inspiration
During the pandemic, it is significantly harder to be motivated to dedicate time to workout. This app encourages the user to set a time to workout, increase goals throughout their process, and track their past sets. It creates a more motivational environment for working out at home.

### What it does
Healthy Habits counts the number of repetitions you do in each workout. It uses machine learning to detect when you finish one repetition. It keeps track of all past workouts. It shows the user the type of workout and the number of repetitions. 

### Login & Database

We used Firebase Authentication and Realtime Database to allow users to create profiles and store their workouts. This way they are able to view their progress over time as they continue to build their habits over time.

### Computer Vision

Using Google's Teachable Machine, we created ML models for various workouts, then using the ml5 library we used image classification to track the number of repititions a user has completed of each exercise.

## Production Build
Here is the link to the production build:
https://healthyhabits-hack.netlify.app/



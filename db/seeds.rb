# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Muscle.create(id: 1, name: "Biceps")
Muscle.create(id: 2, name: "Triceps")
Muscle.create(id: 3, name: "Forearms")

Muscle.create(id: 4, name: "Pectoral")

Muscle.create(id: 5, name: "Abdominal")

Muscle.create(id: 6, name: "Quads")
Muscle.create(id: 7, name: "Hamstrings")
Muscle.create(id: 8, name: "Calves")
Muscle.create(id: 9, name: "Shoulders")
Muscle.create(id: 10, name: "Lats")

## not using Tricpes and Hamstrings 

# Biceps
Exercise.create(id: 1, name: 'Dumbell Curl', video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-curl-front.mp4", instructions: "Stand up straight with a dumbbell in each hand at arm's length. Raise one dumbbell and twist your forearm until it is vertical and your palm faces the shoulder. Lower to original position and repeat with opposite arm.", muscle_id: 1)
Exercise.create(id: 2, name: "Dumbbell Hammer Curl", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-hammer-curl-front.mp4", instructions: "Hold the dumbbells with a neutral grip (thumbs facing the ceiling). Slowly lift the dumbbell up to chest height. Return to starting position and repeat.", muscle_id: 1)

# Tricpes
Exercise.create(id: 3, name: "Dumbbell Skullcrusher", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-skullcrusher-front_XhMR7N7.mp4", instructions: "Lay flat on the floor or a bench with your fists extended to the ceiling and a neutral grip. Break at the elbows until your fists are by your temples. Then extend your elbows and flex your tricep at the top.", muscle_id: 2)
Exercise.create(id: 4, name: "Seated Overhead Tricep Extension", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-overhead-tricep-extension-front.mp4", instructions: "Seated Overhead Tricep Extension', tricep_step_one: 'Sit on the bench and hold a dumbbell with both hands. Raise the dumbbell overhead at arms length, holding the weight up with the palms of your hands. Keep your elbows in while you lower the weight behind your head, your upper arms stationary. Raise the weight back to starting position.", muscle_id: 2)
# url video not working

# Forearms
Exercise.create(id: 5, name: "Dumbbell Wrist Curl", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-wrist-curl-front.mp4", instructions: "Grip the dumbbell with your palm facing upwards with your forearm rested against the bench. Slowly curl your wrist upwards in a semicircular motion. Return to starting position and repeat.", muscle_id: 3)
Exercise.create(id: 6, name: "Dumbbell Row Unilateral", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-row-unilateral-front.mp4", instructions: "Brace your off arm against something stable (bench, box). Stagger your stance so your leg on the side of your working arm is back. Try to get your torso to parallel with the ground. That will extend your range of motion. Let your arm hang freely and then pull your elbow back. Imagine you've got a tennis ball in your armpit and squeeze it each rep.", muscle_id: 3)

# Chest
Exercise.create(id: 7, name: "Dumbbell Incline Chest Flys", video: "https://musclewiki.com/media/uploads/videos/branded/female-dumbbell-incline-chest-flys-front.mp4", instructions: "Lay flat on the bench and place your feet on the ground. Begin the exercise with the dumbbells held together above your chest, elbows slightly bent. Simultaneously lower the weights to either side. Pause when the weights are parallel to the bench, then raise your arms to the starting position.", muscle_id: 4)
Exercise.create(id: 8, name: "Incline Dumbbell Bench Press", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front.mp4", instructions: "Raise the bench to a 30 - 45 degree angle. Lay on the bench and set your feet on the ground. Raise the dumbbells with straight arms then slowly lower them to about shoulder width. Raise them again until your arms are locked and at the starting position again.", muscle_id: 4)
Exercise.create(id: 9, name: "Dumbbell Bench Press", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-bench-press-side.mp4", instructions: "Lay flat on the bench with your feet on the ground. Raise the dumbbells until you have straight arms. Lower the dumbbells to your mid chest, raise the dumbbells until you've locked your elbows.", muscle_id: 4)

# Abdominal
Exercise.create(id: 10, name: "Dumbbell Russian Twist", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-russian-twist-side.mp4", instructions: "Sit on the floor and flex your knees and hips to a 90 degree angle. Your feet should be hovering off the ground. (If that's too hard start with heels on the floor). Rotate your upper spine to engage your obliques.", muscle_id: 5)
Exercise.create(id: 11, name: "Forearm Plank", video: "https://musclewiki.com/media/uploads/videos/branded/male-bodyweight-forearm-plank-front.mp4", instructions: "Place forearms on the ground with your elbows bent at a 90° angle aligned beneath your shoulders, with your arms parallel at shoulder-width. Your feet should be together, with only your toes touching the floor. Lift your belly off the floor and form a straight line from your heels to the crown of your head and hold.", muscle_id: 5)
Exercise.create(id: 12, name: "Laying Leg Raises", video: "https://musclewiki.com/media/uploads/videos/branded/female-bodyweight-leg-raises-front.mp4", instructions: "Lay on your back with your arms palms down on either side. Keep your legs together and as straight as possible. Slowly raise your legs to a 90° angle, pause at this position, or as high as you can reach your legs, and then slowly lower your legs back down. Duration of these movements should be slow so that you do not utilize momentum, enabling you to get the most out of the exercise.", muscle_id: 5)

#Quads
Exercise.create(id: 13, name: "Dumbbell Goblet Squat", video: "https://musclewiki.com/media/uploads/videos/branded/female-dumbbell-goblet-squat-side.mp4", instructions: "Hold the weight tucked into your upper chest area, keeping your elbows in. Your feet should be slightly wider than shoulder width. Sink down into the squat, keeping your elbows inside the track of your knees. Push through your heels while keeping your chest up and return to starting position.", muscle_id: 6)
Exercise.create(id: 14, name: "Leg Extension", video: "https://musclewiki.com/media/uploads/videos/branded/male-machine-leg-extension-side.mp4", instructions: "Sit on the machine with your back against the cushion and adjust the machine you are using so that your knees are at a 90 degree angle at the starting position. Raise the weight by extending your knees outward, then lower your leg to the starting position. Both movements should be done in a slow, controlled motion.", muscle_id: 6)
Exercise.create(id: 15, name: "Step Up", video: "https://musclewiki.com/media/uploads/videos/branded/male-kettlebell-step-up-side.mp4", instructions: "Standing up straight, using a bench as a step, raise one foot onto the bench and hold the kettlebell in the same arm as the straight leg. Stand and bring both feet onto the bench. Slowly lower your leg back down to the starting position an repeat.", muscle_id: 6)

# Hamstrings
Exercise.create(id: 16, name: "Pull Through", video: "https://musclewiki.com/media/uploads/videos/branded/male-cable-pull-through-front.mp4", instructions: "This exercise works best with a rope attachment but can be done with anything. The attachment should be set to the bottom of the machine. Face away from the cable machine, straddle the cable itself, and grab the attachment. Walk a few steps away. Break at the hips while maintaining a flat back and mostly extended knees. Push hips forward until you are back in a standing position.", muscle_id: 7)
Exercise.create(id: 17, name: "Stiff Leg Deadlifts", video: "https://musclewiki.com/media/uploads/videos/branded/female-barbell-stiff-leg-deadlift-front.mp4", instructions: "Stand with a barbell at your shins with your feet shoulder width apart. Bend forward at your hips and keep your knees as fully extended as possible. Grab the barbell and then extend your hips while maintaining a straight back. From the standing position, lower the weight in a controlled manner. You can either lower the weight to the floor or before you touch the floor, depending on your mobility.", muscle_id: 7)
Exercise.create(id: 18, name: "Dumbbell Goblet Good Morning", video: "https://musclewiki.com/media/uploads/videos/branded/female-dumbbell-goblet-good-morning-side.mp4", instructions: "Hold the dumbbell in a goblet position. With your elbows directly under your fists. Push your hips back while leaving your knees MOSTLY extended. You should feel a stretch in your hamstrings. When you feel the stretch push your hips forward until you're back in a standing position.", muscle_id: 7)

#Calves
Exercise.create(id: 19, name: "Dumbbell Calf Raise", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-calf-raise-side.mp4", instructions: "Stand tall with your feet on the ground. You can put the the balls of your feet on top of a plate to extend the range of motion. Imagine you have a string attached to your heels and pull your heels up toward the ceiling.", muscle_id: 8)
Exercise.create(id: 20, name: "Barbell Calf Raises", video: "https://musclewiki.com/media/uploads/videos/branded/male-barbell-calve-raise-side.mp4", instructions: "Place the bar on your back, start with feet flat on the ground. Extend your heels upwards while keeping your knees stationary, and pause at the contracted position. Slowly return to the starting position. Repeat.", muscle_id: 8)

#Shoulders
Exercise.create(id: 21, name: "Dumbbell Seated Overhead Press", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1", instructions: "Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward. Raise the dumbbells upwards and pause at the contracted position. Lower the weights back to starting position.", muscle_id: 9)
Exercise.create(id: 22, name: "Dumbbell Lateral Raise", video: "https://musclewiki.com/media/uploads/videos/branded/male-dumbbell-lateral-raise-front.mp4#t=0.1", instructions: "Stand up straight with dumbbells at either side, palms facing your hips. Raise your arms on either side with a slight bend in your elbow until they are parallel with the floor. Pause at the top of the motion. Slowly return your arms down to starting position.", muscle_id: 9)

#Lats
Exercise.create(id:23, name: "Bent Over Barbell Row", video: "https://musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-front.mp4#t=0.1", instructions: "Grab a barbell with a shoulder width pronated or supinated grip. Bend forward at your hips while maintaining a flat back. Pull the weight toward your upper abdomen. Lower the weight in a controlled manner and repeat.", muscle_id: 10)
Exercise.create(id: 24, name: "Cable Pullover", video: "https://musclewiki.com/media/uploads/videos/branded/male-cable-pullover-side.mp4#t=0.1",instructions: "You can use any attachment. Cable should be set all the way to the top of the machine. Grab your attachment and walk a few steps back. Push your butt back to where you are leaning forward somewhat. Initiate the movement with your shoulders and not your elbows. Imagine trying to pull the attachment through your thighs at the bottom", muscle_id: 10)
import {API} from "aws-amplify";

// API functions for statistics
export function createStats() {
    return API.post("workout-party", "/stats", {});
}

export async function getStats() {
    return API.get("workout-party", "/stats", {});
}

export function updateStats(stats) {
    // stats should be an object of {stats: {"CURRENT STATS"}, chest: INT, shoulder: INT, arms: INT, core: INT, legs: INT}
    return API.put("workout-party", "/stats", {
        body: stats
    });
}

// API functions for user-info
export function createUserInfo(name) {
    return API.post("workout-party", "/user_info", {
        body: {
            name: name
        }
    });
}

export function getUserInfo() {
    return API.get("workout-party", "/user_info", {});
}

export function addWorkoutToUser(currentHistory, newWorkoutId, noOfWorkouts) {
    return API.put("workout-party", "/user_info/add_workout", {
        body: {
            current: currentHistory, // workoutHistory field in user-info
            workout: newWorkoutId, // id when creating new past workout
            noOfWorkouts: noOfWorkouts // noOfWorkouts field in user-info
        }
    });
}

export function changeUserPic(image_url) {
    return API.put("workout-party", "/user_info/change_pic", {
        body: {
            profilePic: image_url
        }
    });
}

// API functions for past-workouts

export function createPastWorkout(date, participants, videoDesc, videoLink) {
    return API.post("workout-party", `/past_workouts/`, {
        body: {
            date: date, // String of date
            participants: participants, // array of names (String)
            videoDesc: videoDesc, // String
            videoLink: videoLink // String
        }
    });
}

export function getPastWorkout(id) {
    return API.get("workout-party", `/past_workouts/${id}`, {});
}
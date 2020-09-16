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
export function createUserInfo() {
    return API.post("workout-party", "/user_info", {});
}

export function getUserInfo() {
    return API.get("workout-party", "/user_info", {});
}

export function addWorkoutToUser(data) {
    // data should be an object of {current: [CURRENT_HISTORY], workout: NEW_WORKOUT_ID, noOfWorkouts: CURRENT_NO_OF_WORKOUTS}
    return API.put("workout-party", "/user_info/add_workout", {
        body: data
    });
}

export function changeUserPic(data) {
    // data should be an object of {profilePic: "IMAGE_URL"}
    return API.put("workout-party", "/user_info/change_pic", {
        body: data
    });
}

export function getPastWorkout(id) {
    return API.get("workout-party", `/past_workouts/${id}`, {});
}
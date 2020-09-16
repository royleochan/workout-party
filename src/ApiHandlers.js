import {API} from "aws-amplify";

// API functions for statistics
export function createStats() {
    return API.post("workout-party", "/stats", {});
}

export async function getStats() {
    return API.get("workout-party", "/stats", {});
}

export function updateStats(stats) {
    // stats should be a map of {stats: {"CURRENT STATS"}, chest: INT, shoulder: INT, arms: INT, core: INT, legs: INT}
    return API.put("workout-party", "/stats", {
        body: stats
    });
}

// API functions for user-info
export function createUserInfo() {
    return API.post("workout-party", "/user_info", {});
}
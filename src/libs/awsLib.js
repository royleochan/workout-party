import { Storage } from "aws-amplify";
import { getUserInfo } from "../ApiHandlers";

export async function s3Upload(file) {
    const userInfo = getUserInfo();
    const filename = `${Date.now()}-dp.${file.type.substr(6)}`;

    const stored = await Storage.put(filename, file, {
        contentType: file.type,
        level: "protected"
    });

    return stored.key;
}
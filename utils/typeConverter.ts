import { ActorInfo, ActorType } from "./types";

export function convertActorInfoToActorType(actorInfo: ActorInfo): ActorType {
    return {
        adult: actorInfo.adult,
        gender: actorInfo.gender,
        id: actorInfo.id,
        known_for: [],
        known_for_department: actorInfo.known_for_department,
        name: actorInfo.name,
        original_name: actorInfo.original_name,
        popularity: actorInfo.popularity,
        profile_path: actorInfo.profile_path,
    };
}
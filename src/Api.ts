import dotenv from "dotenv";
dotenv.config();

export type BotAction = BotActionOptions;

export enum BotActionOptions {
    initialize = 0,
    reactionAdd = 1,
    reactionRemove = 2,
    update = 3
}

const getBotToken = (): string => {
    if (process.env.BOT_TOKEN) {
        return process.env.BOT_TOKEN;
    } else {
        throw Error("Your bot token is undefined!");
    }
};
const getBotName = (): string => {
    if (process.env.BOT_NAME) {
        return process.env.BOT_NAME;
    } else {
        throw Error("Your bot name is undefined!");
    }
};
const getMapPool = (): string[] => {
    if (process.env.MAP_POOL) {
        return process.env.MAP_POOL.split(',');
    } else {
        throw Error("Your map pool is undefined!");
    }
};

const getDiscordId = (): string => {
    if (process.env.DISCORD_ID) {
        return process.env.DISCORD_ID;
    } else {
        throw Error("Your discord ID is undefined!")
    }
}

const getChannelId = (): string => {
    if (process.env.CHANNEL_ID) {
        return process.env.CHANNEL_ID;
    } else {
        throw Error("Your channel ID is undefined!");
    }
};

const getTimeToAlert = (): Date => {
    if (process.env.TIME_TO_ALERT) {
        return new Date(parseInt(process.env.TIME_TO_ALERT));
    } else {
        return new Date(720000);
        // throw Error("Your time to alert user is undefined!");
    }
}

const getTimeToRespond = (): number => {
    if (process.env.TIME_TO_RESPOND) {
        return parseInt(process.env.TIME_TO_RESPOND);
    } else {
        return 90000;
        // throw Error("Your time for user to respond to alert is undefined!");
    }
}

const getDefaultValueForEmptyTeam = (): string => {
    if (process.env.DEFAULT_VALUE_FOR_EMPTY_TEAM) {
        return process.env.DEFAULT_VALUE_FOR_EMPTY_TEAM;
    } else {
        return "waiting on first player";
        // throw Error("Your default value for when a team is empty is undefined!");
    }
}

const getMatchSize = (): number => {
    if (process.env.MATCH_SIZE) {
        return parseInt(process.env.MATCH_SIZE);
    } else {
        return 10;
        // throw Error("Your match size value is undefined!")
    }
};

export enum TeamNameOptions {
    red = 0,
    blue = 1
}

export const getTeamName = (whichTeam: TeamNameOptions): string => {
    if (whichTeam === TeamNameOptions.red) {
        return redTeamName;
    } else if (whichTeam === TeamNameOptions.blue) {
        return blueTeamName;
    } else {
        throw Error("Unable to find team name that was outside the scope of these two teams.");
    }
};

const getRedTeamName = (): string => process.env.RED_TEAM_NAME ? process.env.RED_TEAM_NAME : "Red Team";
const getBlueTeamName = (): string => process.env.BLUE_TEAM_NAME ? process.env.BLUE_TEAM_NAME : "Blue Team";

export const botToken: string = getBotToken();
export const botName: string = getBotName();

export const mapPool: string[] = getMapPool();

export const discordId: string = getDiscordId();
export const channelId: string = getChannelId();
export const channelFullPath = `https://discord.com/channels/${discordId}/${channelId}`
export const defaultValueForEmptyTeam: string = getDefaultValueForEmptyTeam();

export const queueEmojiName: string = process.env.QUEUE_EMOJI_NAME ? process.env.QUEUE_EMOJI_NAME : "🎮";
export const queueEmojiId: string = process.env.QUEUE_EMOJI_ID ? process.env.QUEUE_EMOJI_ID : "";
export const queueEmojiIdNum: string = process.env.QUEUE_EMOJI_ID_NUM ? process.env.QUEUE_EMOJI_ID_NUM : "";

//TODO: wrap all of these in getter that handle undefined values
export const redTeamName: string = getRedTeamName();
export const redTeamEmojiName: string = process.env.RED_TEAM_EMOJI_NAME ? process.env.RED_TEAM_EMOJI_NAME : "🟥";
export const redTeamEmojiId: string = process.env.RED_TEAM_EMOJI_ID ? process.env.RED_TEAM_EMOJI_ID : "";
export const redTeamEmojiIdNum: string = process.env.RED_TEAM_EMOJI_ID_NUM ? process.env.RED_TEAM_EMOJI_ID_NUM : "";
export const blueTeamName: string = getBlueTeamName();
export const blueTeamEmojiName: string = process.env.BLUE_TEAM_EMOJI_NAME ? process.env.BLUE_TEAM_EMOJI_NAME : "🟦";
export const blueTeamEmojiId: string = process.env.BLUE_TEAM_EMOJI_ID ? process.env.BLUE_TEAM_EMOJI_ID : "";
export const blueTeamEmojiIdNum: string = process.env.BLUE_TEAM_EMOJI_ID_NUM ? process.env.BLUE_TEAM_EMOJI_ID_NUM : "";

export const defaultEmbedColor: string = process.env.DEFAULT_EMBED_COLOR ? process.env.DEFAULT_EMBED_COLOR : "#ff0000";

export const defaultEmbedThumbnailUrl: string = process.env.DEFAULT_EMBED_THUMBNAIL_URL ? process.env.DEFAULT_EMBED_THUMBNAIL_URL : "https://www.example.com";
export const queueEmbedThumbnailUrl: string | undefined = process.env.QUEUE_EMBED_THUMBNAIL_URL;
export const teamsEmbedThumbnailUrl: string | undefined = process.env.TEAMS_EMBED_THUMBNAIL_URL;
export const mapsEmbedThumbnailUrl: string | undefined = process.env.MAPS_EMBED_THUMBNAIL_URL;
export const finalEmbedThumbnailUrl: string | undefined = process.env.FINAL_EMBED_THUMBNAIL_URL;
export const alertEmbedThumbnailUrl: string | undefined = process.env.FINAL_EMBED_THUMBNAIL_URL;
export const directMessageThumbnailUrl: string | undefined = process.env.TEAMS_EMBED_THUMBNAIL_URL;

export const queueEmbedTitle: string = process.env.QUEUE_EMBED_TITLE ? process.env.QUEUE_EMBED_TITLE : "Reaction Based PUG Bot";

export const teamsEmbedTitle: string = process.env.TEAMS_EMBED_TITLE ? process.env.TEAMS_EMBED_TITLE : "Choose Your Side";

export const directMessageTitle: string = process.env.DIRECT_MESSAGE_TITLE ? process.env.DIRECT_MESSAGE_TITLE : "Hey!";
export const directMessageName: string = process.env.DIRECT_MESSAGE_NAME ? process.env.DIRECT_MESSAGE_NAME : "Your PUG is Ready!";

export const matchSize: number = getMatchSize();
export const teamSize: number = matchSize / 2;

export const admins: string[] | undefined = process.env.ADMINS ? process.env.ADMINS.split(',') : undefined;

export const resetTeamsEmojiName: string = process.env.RESET_TEAMS_EMOJI_NAME ? process.env.RESET_TEAMS_EMOJI_NAME : "♻️";
export const resetTeamsEmojiId: string = process.env.RESET_TEAMS_EMOJI_NAME ? process.env.RESET_TEAMS_EMOJI_NAME : "";
export const resetTeamsEmojiIdNum: string = process.env.RESET_TEAMS_EMOJI_NAME ? process.env.RESET_TEAMS_EMOJI_NAME : "";
export const resetPugEmojiName: string = process.env.RESET_PUG_EMOJI_NAME ? process.env.RESET_PUG_EMOJI_NAME : "⛔";
export const resetPugEmojiId: string = process.env.RESET_PUT_EMOJI_ID ? process.env.RESET_PUT_EMOJI_ID : "";
export const resetPugEmojiIdNum: string = process.env.RESET_PUG_EMOJI_ID_NUM ? process.env.RESET_PUG_EMOJI_ID_NUM : "";

export const optionOneEmojiName: string = process.env.OPTION_ONE_EMOJI_NAME ? process.env.OPTION_ONE_EMOJI_NAME : "1️⃣";
export const optionOneEmojiId: string = process.env.OPTION_ONE_EMOJI_ID ? process.env.OPTION_ONE_EMOJI_ID : "";
export const optionOneEmojiIdNum: string = process.env.OPTION_ONE_EMOJI_ID_NUM ? process.env.OPTION_ONE_EMOJI_ID_NUM : "";

export const optionTwoEmojiName: string = process.env.OPTION_TWO_EMOJI_NAME ? process.env.OPTION_TWO_EMOJI_NAME : "2️⃣";
export const optionTwoEmojiId: string = process.env.OPTION_TWO_EMOJI_ID ? process.env.OPTION_TWO_EMOJI_ID : "";
export const optionTwoEmojiIdNum: string = process.env.OPTION_TWO_EMOJI_ID_NUM ? process.env.OPTION_TWO_EMOJI_ID_NUM : "";

export const optionThreeEmojiName: string = process.env.OPTION_THREE_EMOJI_NAME ? process.env.OPTION_THREE_EMOJI_NAME : "3️⃣";
export const optionThreeEmojiId: string = process.env.OPTION_THREE_EMOJI_ID ? process.env.OPTION_THREE_EMOJI_ID : "";
export const optionThreeEmojiIdNum: string = process.env.OPTION_THREE_EMOJI_ID_NUM ? process.env.OPTION_THREE_EMOJI_ID_NUM : "";

export const timeToBanMap: number = process.env.TIME_TO_BAN_MAP ? parseInt(process.env.TIME_TO_BAN_MAP) : 30;
export const timeToAlert: Date = getTimeToAlert();
export const timeToRespond: number = getTimeToRespond();

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
        throw Error("Your time to alert user is undefined!");
    }
}

const getTimeToRespond = (): number => {
    if (process.env.TIME_TO_RESPOND) {
        return parseInt(process.env.TIME_TO_RESPOND);
    } else {
        throw Error("Your time for user to respond to alert is undefined!");
    }
}

const getDefaultValueForEmptyTeam = (): string => {
    if (process.env.DEFAULT_VALUE_FOR_EMPTY_TEAM) {
        return process.env.DEFAULT_VALUE_FOR_EMPTY_TEAM;
    } else {
        throw Error("Your default value for when a team is empty is undefined!");
    }
}

const getMatchSize = (): number => {
    if (process.env.MATCH_SIZE) {
        return parseInt(process.env.MATCH_SIZE);
    } else {
        throw Error("Your match size value is undefined!")
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

//TODO: get from config
const getRedTeamName = (): string => "Security";
const getBlueTeamName = (): string => "Insurgents";



export const botToken: string = getBotToken();
export const botName: string = getBotName();

//TODO: disable Maps.ts call when mapPool.length === 0, enable random automatically if it is < 3
export const mapPool: string[] = getMapPool();


export const discordId: string = getDiscordId();
export const channelId: string = getChannelId();
export const channelFullPath = `https://discord.com/channels/${discordId}/${channelId}`
export const defaultValueForEmptyTeam: string = getDefaultValueForEmptyTeam();

export const queueEmojiName: string = "ew_mouse"; /*process.env.QUEUE_EMOJI_NAME;*/
export const queueEmojiId: string = "<:ew_mouse:791235695619473449>"; /*process.env.QUEUE_EMOJI_ID;*/
export const queueEmojiIdNum: string = "791235695619473449";

//TODO: wrap all of these in getter that handle undefined values
export const redTeamName: string = getRedTeamName();
export const redTeamEmojiName: string = "Security_Banner"; /*process.env.RED_TEAM_EMOJI_NAME;*/
export const redTeamEmojiId: string = "<:Security_Banner:818597693227008050>"; /*process.env.RED_TEAM_EMOJI_ID;*/
export const redTeamEmojiIdNum: string = "818597693227008050";
export const blueTeamName: string = getBlueTeamName();
export const blueTeamEmojiName: string = "Insurgency_Icon"; /*process.env.BLUE_TEAM_EMOJI_NAME;*/
export const blueTeamEmojiId: string = "<:Insurgency_Icon:818597711783133194>"; /*process.env.BLUE_TEAM_EMOJI_ID;*/
export const blueTeamEmojiIdNum: string = "818597711783133194"; /*process.env.BLUE_TEAM_EMOJI_ID_NUM;*/

export const defaultEmbedColor: string = "#ff0000" /*process.env.DEFAULT_EMBED_COLOR*/

//TODO: make thumbnailUrl for each embed but give option for all to inherit from default (necessary?)
export const defaultEmbedThumbnailUrl: string = "https://www.example.com"; /*process.env.DEFAULT_EMBED_THUMBNAIL_URL;*/
export const queueEmbedThumbnailUrl: string | undefined = undefined; /*process.env.QUEUE_EMBED_THUMBNAIL_URL;*/
export const teamsEmbedThumbnailUrl: string | undefined = undefined; /*process.env.TEAMS_EMBED_THUMBNAIL_URL;*/
export const mapsEmbedThumbnailUrl: string | undefined = undefined; /*process.env.MAPS_EMBED_THUMBNAIL_URL;*/
export const finalEmbedThumbnailUrl: string | undefined = undefined; /*process.env.FINAL_EMBED_THUMBNAIL_URL;*/
export const alertEmbedThumbnailUrl: string | undefined = undefined; /*process.env.FINAL_EMBED_THUMBNAIL_URL;*/
export const directMessageThumbnailUrl: string | undefined = undefined; /*process.env.TEAMS_EMBED_THUMBNAIL_URL;*/

export const queueEmbedTitle: string = "Reaction Based PUG Bot"; /*process.env.QUEUE_EMBED_TITLE;*/

export const teamsEmbedTitle: string = "Choose Your Side"; /*process.env.TEAMS_EMBED_TITLE;*/

export const directMessageTitle: string = "Hey!"; /*process.env.DIRECT_MESSAGE_TITLE;*/
export const directMessageName: string = "Your 5v5 Sandstorm Game is Ready!" /*process.env.DIRECT_MESSAGE_NAME;*/

export const matchSize: number = getMatchSize();
export const teamSize: number = matchSize / 2;

export const admins: string[] | undefined = ["first", "second"]/*process.env.ADMINS.split(',');*/

export const resetTeamsEmojiName: string = "♻️";/*process.env.RESET_TEAMS_EMOJI_NAME;*/
//resetTeamsEmojiId
//resetTeamsEmojiIdNum
export const resetPugEmojiName: string = "⛔";/*process.env.RESET_PUG_EMOJI_NAME;*/
//resetPugEmojiId
//resetPugEmojiIdNum

export const optionOneEmojiName: string = "🟥";/*process.env.OPTION.ONE.EMOJI.NAME;*/
export const optionOneEmojiId: string = "";/*process.env.OPTION.ONE.EMOJI.ID;*/
export const optionOneEmojiIdNum: string = "";/*process.env.OPTION.ONE.EMOJI.ID_NUM;*/

export const optionTwoEmojiName: string = "⬜";/*process.env.OPTION.TWO.EMOJI.NAME;*/
export const optionTwoEmojiId: string = "";/*process.env.OPTION.TWO.EMOJI.ID;*/
export const optionTwoEmojiIdNum: string = "";/*process.env.OPTION.TWO.EMOJI.ID_NUM;*/

export const optionThreeEmojiName: string = "🟦";/*process.env.OPTION.THREE.EMOJI.NAME;*/
export const optionThreeEmojiId: string = "";/*process.env.OPTION.THREE.EMOJI.ID;*/
export const optionThreeEmojiIdNum: string = "";/*process.env.OPTION.THREE.EMOJI.ID_NUM;*/

export const timeToBanMap: number = 30;/*process.env.TIME_TO_BAN_MAP;*/
export const timeToAlert: Date = getTimeToAlert();
export const timeToRespond: number = getTimeToRespond();

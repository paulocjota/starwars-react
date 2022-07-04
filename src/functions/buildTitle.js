import { TITLE_PREFIX, TITLE_SUFIX } from "../Config";

export default function buildTitle(title, value = ''){
    return TITLE_PREFIX + title + (value ? ' ' + value : '') + TITLE_SUFIX
}
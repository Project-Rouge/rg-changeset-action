import { writeFileSync } from "fs";
import { Globals } from "../utils/Globals";
import { deleteMeMessage } from "./deleteMePrMessage";

export const deleteFile = 'DELETE_ME.md';

export function addDeleteMeFile(branch: string) {

  writeFileSync(deleteFile, [
    ":warning::warning::warning:",
    `This file was generated by ${Globals.mdLink}. When you are ready to merge the PR associated with this file, make sure you delete this file first.`,
    "Why do we have this?",
    "Because PRs created automatically by Github Actions won't trigger PR checks. By manually deleting this file, you will trigger the required PR checks.",
    ":octocat: File generated by rg-changeset.",
    ":warning::warning::warning:",
  ].join('\n\n'));

  return deleteMeMessage(branch);

}
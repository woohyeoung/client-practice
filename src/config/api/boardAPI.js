import axios from "axios";
import { listUrl, createUrl, readUrl, updateUrl, deleteUrl } from "../indexUrl";

// Select
export const getListDate = async () => {
  const result = await axios
    .get(listUrl)
    .then((res) => res.data)
    .catch((data) => data);
  return result;
};
export const getListView = async () => {
  const result = await axios
    .get(listUrl)
    .then((res) => res.data)
    .catch((data) => data);
  return result;
};
export const getListFind = async () => {
  const result = await axios
    .get(listUrl)
    .then((res) => res.data)
    .catch((data) => data);
  return result;
};
export const getBoardDetail = async () => {
  const result = await axios
    .get(readUrl)
    .then((res) => res.data)
    .catch((data) => data);
  return result;
};

// Create
export const setBoardCreate = async () => {
  const result = await axios
    .get(createUrl)
    .then((res) => res.data)
    .catch((data) => data);
  return result;
};
// Update
export const setBoardUpdate = async () => {
  const result = await axios
    .get(updateUrl)
    .then((res) => res.data)
    .catch((data) => data);
  return result;
};
// Delete
export const setBoardDelete = async () => {
  const result = await axios
    .get(deleteUrl)
    .then((res) => res.data)
    .catch((data) => data);
  return result;
};

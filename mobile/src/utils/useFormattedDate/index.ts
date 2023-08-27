export const useFormattedDate = (unformattedDate: Date | null) => {
	const date = unformattedDate && new Date(unformattedDate);
	const formattedDate = date?.toLocaleString();

	return formattedDate;
};

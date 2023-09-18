export const useFormattedDate = (unformattedDate: Date | null) => {
	const date = unformattedDate && new Date(unformattedDate);
	const formattedDate = date?.toLocaleString();

	return formattedDate;
};

export const formatDateToString = (date: Date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses começam de 0
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

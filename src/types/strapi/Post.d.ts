interface IPost {
	id: string;
	title: string;
	content: string;
	contentHtml: string;
	slug?: string;
	author?: IUser;
}

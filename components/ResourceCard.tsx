import React from "react";

interface ResourceCardProps {
	title: string;
	id: string;
	image: string;
	downloadNumber: number;
	slug: string;
}

const ResourceCard = ({
	title,
	id,
	image,
	downloadNumber,
	slug,
}: ResourceCardProps) => {
	return <div>ResourceCard</div>;
};

export default ResourceCard;

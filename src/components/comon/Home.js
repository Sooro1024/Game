import React from "react";
import {
	Container,
	Col,
	Row,
	Card,
	CardBody,
	CardImg,
	CardTitle,
	CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import snake from "./Images/Snake.png";
import puzzle from "./Images/Puzzle.png";
import matchPic from "./Images/MatchPic.png";

const games = [
	{
		img: puzzle,
		path: "/puzzle-15",
		name: "Puzzle 15",
		text: "Reorder numbers in the correct order"
	},
	{
		img: matchPic,
		path: "/match-the-picture",
		name: "Match the picture",
		text: "Find all animal pairs !"
	},
	{
		img: snake,
		path: "/snake",
		name: "Snake",
		text: "Retro snake game. Did you remember it ?"
	}
];

const Home = () => {
	return (
		<Container>
			<Row className="align-items-stretch games-wraper">
				{games.map(el => (
					<Col sm={12} md={4} key={el.path}>
						<Card>
							<CardImg top width="100%" src={el.img} alt="Card image cap" />
							<CardBody>
								<CardTitle>{el.name}</CardTitle>
								<CardText>{el.text}</CardText>
								<Link className="btn btn-primary" to={el.path}>
									Play
								</Link>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Home;

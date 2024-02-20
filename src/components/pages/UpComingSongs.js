import React from "react";
import { PiMusicNoteFill } from "react-icons/pi";
import { IoArrowForwardOutline } from "react-icons/io5";
import styled from "styled-components";

const UpComing = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	gap: 10px;
	background-color: rgba(44, 42, 42, 0.762);
	height: 280px;
	border-radius: 10px;
	width: 20%;
	color: #fff;
`;
const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	width: 85%;
	padding: 0 15px;
	cursor: pointer;
	font-weight: bold;
`;
const Label = styled.label``;

const ContainerInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	flex-direction: column;
	gap: 13px;
	width: 85%;
	height: 200px;
	margin-left: 15px;
	overflow-y: hidden;
	&:hover {
		overflow-y: scroll;
	}
	&::-webkit-scrollbar {
		width: 7px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #555;
	}
`;

const PlayList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 10px;
`;
const Img = styled.div`
	border: 1px solid #fff;
	padding: 7px 8px 5px;
	border-radius: 50%;
`;
const Name = styled.label`
	font-weight: bold;
`;
const Artist = styled.label`
	color: rgb(130, 133, 135);
	font-size: 14px;
	font-weight: 600;
`;
const Details = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: start;
	flex-direction: column;
`;

const UpComingSongs = () => {
	return (
		<UpComing>
			<Title>
				<Label>Up Coming</Label>
				<IoArrowForwardOutline />
			</Title>
			<ContainerInner>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>Shubh</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
				<PlayList>
					<Img>
						<PiMusicNoteFill />
					</Img>
					<Details>
						<Name>aaaaaa</Name>
						<Artist>fowhfdfed</Artist>
					</Details>
				</PlayList>
			</ContainerInner>
		</UpComing>
	);
};

export default UpComingSongs;
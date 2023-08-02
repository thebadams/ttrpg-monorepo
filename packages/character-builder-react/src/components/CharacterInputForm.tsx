import { useAtom } from 'jotai';
import {
	charismaAtom,
	constitutionAtom,
	dexterityAtom,
	intelligenceAtom,
	levelAtom,
	nameAtom,
	playerAtom,
	wisdomAtom,
	strengthAtom,
} from '../state/currentCharacter';

export default function CharacterInputForm() {
	const [_name, setName] = useAtom(nameAtom);
	const [_playerName, setPlayerName] = useAtom(playerAtom);
	const [level, setLevel] = useAtom(levelAtom);
	const [strength, setStrength] = useAtom(strengthAtom);
	const [dexterity, setDexterity] = useAtom(dexterityAtom);
	const [constitution, setConstitution] = useAtom(constitutionAtom);
	const [intelligence, setIntelligence] = useAtom(intelligenceAtom);
	const [wisdom, setWisdom] = useAtom(wisdomAtom);
	const [charisma, setCharisma] = useAtom(charismaAtom);
	return (
		<>
			<label htmlFor="name">CHARACTER NAME INPUT || </label>
			<input
				type="text"
				name="name"
				id="name"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<br />
			<hr />
			<label htmlFor="playerName">PLAYER NAME INPUT || </label>
			<input
				type="text"
				name="playerName"
				id="playerName"
				onChange={(e) => {
					setPlayerName(e.target.value);
				}}
			/>
			<br />
			<hr />
			<label htmlFor="level">CHARACTER LEVEL || </label>
			<input
				type="number"
				name="level"
				id="level"
				value={level}
				max={10}
				min={1}
				onChange={(e) => {
					setLevel(parseInt(e.target.value));
				}}
			/>
			<br />
			<hr />
			<label htmlFor="str">STRENGTH INPUT || </label>
			<input
				type="number"
				name="str"
				id="str"
				value={strength}
				max={20}
				min={1}
				onChange={(e) => {
					setStrength(parseInt(e.target.value));
				}}
			/>
			<br />
			<hr />
			<label htmlFor="dex">DEXTERITY INPUT || </label>
			<input
				type="number"
				name="dex"
				id="dex"
				value={dexterity}
				max={20}
				min={1}
				onChange={(e) => {
					setDexterity(parseInt(e.target.value));
				}}
			/>
			<br />
			<hr />
			<label htmlFor="con">CONSTITUTION INPUT || </label>
			<input
				type="number"
				name="con"
				id="con"
				value={constitution}
				max={20}
				min={1}
				onChange={(e) => {
					setConstitution(parseInt(e.target.value));
				}}
			/>
			<br />
			<hr />
			<label htmlFor="int">STRENGTH INPUT || </label>
			<input
				type="number"
				name="int"
				id="int"
				value={intelligence}
				max={20}
				min={1}
				onChange={(e) => {
					setIntelligence(parseInt(e.target.value));
				}}
			/>
			<br />
			<hr />
			<label htmlFor="wis">STRENGTH INPUT || </label>
			<input
				type="number"
				name="wis"
				id="wis"
				value={wisdom}
				max={20}
				min={1}
				onChange={(e) => {
					setWisdom(parseInt(e.target.value));
				}}
			/>
			<br />
			<hr />
			<label htmlFor="cha">STRENGTH INPUT || </label>
			<input
				type="number"
				name="cha"
				id="cha"
				value={charisma}
				max={20}
				min={1}
				onChange={(e) => {
					setCharisma(parseInt(e.target.value));
				}}
			/>
		</>
	);
}

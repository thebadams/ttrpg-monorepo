import { useAtom } from 'jotai';
import { currentCharacterAtom } from '../state/currentCharacter';

export default function CharacterDisplay() {
  const [currentCharacter] = useAtom(currentCharacterAtom);
  return (
    <>
      <h2 className=" text-center text-3xl text-red-700 shadow-sm shadow-black">
        Current Character
      </h2>
      <h3>CHARACTER NAME || {currentCharacter.name}</h3>
      <h3>PLAYER NAME || {currentCharacter.player}</h3>
      <h3>CHARACTER CLASS || {currentCharacter.class}</h3>
      <h3>CHARACTER LEVEL || {currentCharacter.level}</h3>
      <h3>
        STRENGTH || {currentCharacter.abilities.strength.score} ||{' '}
        {currentCharacter.abilities.strength.mod}
      </h3>
      <h3>
        DEXTERITY || {currentCharacter.abilities.dexterity.score} ||{' '}
        {currentCharacter.abilities.dexterity.mod}
      </h3>
      <h3>
        CONSTITUTION || {currentCharacter.abilities.constitution.score} ||{' '}
        {currentCharacter.abilities.constitution.mod}
      </h3>
      <h3>
        INTELLIGENCE || {currentCharacter.abilities.intelligence.score} ||{' '}
        {currentCharacter.abilities.intelligence.mod}
      </h3>
      <h3>
        WISDOM || {currentCharacter.abilities.wisdom.score} ||{' '}
        {currentCharacter.abilities.wisdom.mod}
      </h3>
      <h3>
        CHARISMA || {currentCharacter.abilities.charisma.score} ||{' '}
        {currentCharacter.abilities.charisma.mod}
      </h3>
    </>
  );
}

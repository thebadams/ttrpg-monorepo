import { useAtom } from 'jotai';
import { currentCharacterAtom } from '../state/currentCharacter';

export default function CharacterDisplay() {
  const [currentCharacter] = useAtom(currentCharacterAtom);
  return (
    <>
      <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Current Character
        </h2>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            CHARACTER NAME
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.name}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Player Name
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.player}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            CLASS
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.class}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            CHARACTER LEVEL
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.level}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            STRENGTH
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.abilities.strength.score} ||{' '}
            {currentCharacter.abilities.strength.mod}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            DEXTERITY
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.abilities.dexterity.score} ||{' '}
            {currentCharacter.abilities.dexterity.mod}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            CONSTITUTION
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.abilities.constitution.score} ||{' '}
            {currentCharacter.abilities.constitution.mod}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            INTELLIGENCE
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.abilities.intelligence.score} ||{' '}
            {currentCharacter.abilities.intelligence.mod}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            WISDOM
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.abilities.wisdom.score} ||{' '}
            {currentCharacter.abilities.wisdom.mod}
          </p>
          <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            CHARISMA
          </h3>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {currentCharacter.abilities.charisma.score} ||{' '}
            {currentCharacter.abilities.charisma.mod}
          </p>
        </div>
      </div>
    </>
  );
}

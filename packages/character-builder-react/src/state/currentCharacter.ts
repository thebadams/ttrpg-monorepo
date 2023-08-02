import { atom } from 'jotai';

export const nameAtom = atom('Valar the Oathsmith');
export const playerAtom = atom('Badams');
export const classAtom = atom('Paladin');
export const levelAtom = atom(9);
export const strengthAtom = atom(20);
export const dexterityAtom = atom(12);
export const constitutionAtom = atom(16);
export const intelligenceAtom = atom(10);
export const wisdomAtom = atom(14);
export const charismaAtom = atom(18);

export const currentCharacterAtom = atom((get) => {
	return {
		name: get(nameAtom),
		player: get(playerAtom),
		class: get(classAtom),
		level: get(levelAtom),
		abilities: {
			strength: {
				score: get(strengthAtom),
				mod: Math.floor((get(strengthAtom) - 10) / 2),
			},
			dexterity: {
				score: get(dexterityAtom),
				mod: Math.floor((get(dexterityAtom) - 10) / 2),
			},
			constitution: {
				score: get(constitutionAtom),
				mod: Math.floor((get(constitutionAtom) - 10) / 2),
			},
			intelligence: {
				score: get(intelligenceAtom),
				mod: Math.floor((get(intelligenceAtom) - 10) / 2),
			},
			wisdom: {
				score: get(wisdomAtom),
				mod: Math.floor((get(wisdomAtom) - 10) / 2),
			},
			charisma: {
				score: get(charismaAtom),
				mod: Math.floor((get(charismaAtom) - 10) / 2),
			},
		},
	};
});

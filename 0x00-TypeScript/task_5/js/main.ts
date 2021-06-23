interface MajorCredits {
    credits: number;
    _mayor: void;
}

interface MinorCredits {
    credits: number;
    _minor: void;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  return { credits: sum } as MajorCredits;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  return { credits: sum } as MinorCredits;
}
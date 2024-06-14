import './selectForFilteringLanguages.css'

type Props = {
  languagesOfRepos: string[];
  selectedLanguage: string;
  onChange: (language: string) => void;
}

export const SelectForFilteringLanguages = ({ languagesOfRepos, selectedLanguage, onChange }: Props) => {
  return (
    <div className="language-dropdown">
      <select value={selectedLanguage} onChange={(e) => onChange(e.target.value)}>
        <option value="All">All</option>
        {languagesOfRepos.map((lang, index) => (
          <option key={index} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};
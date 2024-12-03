import React, { useState } from 'react';

interface Ratings {
  [key: string]: number;
}

const LandSection: React.FC = () => {
  const [ratings, setRatings] = useState<Ratings>({
    "מפתח פולסטאק": 1,
    "מפתח דאטא": 1,
    "מפתח דבאופס": 1,
    "תורן": 1,
  });

  const handleRatingChange = (job: string, value: number): void => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [job]: value,
    }));
  };

  return (
    <div className="gxURRVZ9">
      <h3 className="QGYxaoBJ">דירוג תפקידים בתכנית קודקוד</h3>
      <table className="m76rK0MT">
        <tbody>
          {["מפתח פולסטאק", "מפתח דאטא", "מפתח דבאופס", "תורן"].map((job) => (
            <tr className="_4toy5D9-" key={job}>
              <td className="WTAPFjLO">{job}</td>
              <td className="Oi7tu-Nw">
                <div className="_7R-wj2d3">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <label className="kNQqukZg" key={value}>
                      <input
                        type="radio"
                        className="HpuCzejn"
                        value={value}
                        checked={ratings[job] === value}
                        onChange={() => handleRatingChange(job, value)}
                      />
                      <span className={`_4KhRFVBU ${ratings[job] === value ? 'Ou4-b7EZ' : ''}`}>{value}</span>
                    </label>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LandSection;

const AirQualityLevelsTable = () => {
    const levels = [
        { range: '0 - 50', level: 'Good'},
        { range: '51 - 100', level: 'Moderate'},
        { range: '101 - 150', level: 'Unhealthy for Sensitive Groups'},
        { range: '151 - 200', level: 'Unhealthy'},
        { range: '201 - 300', level: 'Very Unhealthy'},
        { range: '301 and higher', level: 'Hazardous'},
      ];
    return (
        <table>
            {levels.map(({range, level},index)=>{
                <tr key={index}>
                    <td>{range}</td>
                    <td>{level}</td>
                </tr>
            })}
        </table>
    )
}

export default AirQualityLevelsTable
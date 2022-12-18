import PropTypes from 'prop-types';
import {Section, Title, StatList, StatListItem, Label, Percentage} from './Statistics.styles';


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

export const Statistics = ({title, stats}) => {
    return(
        <Section>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(({id, percentage, label }) => (
                <StatListItem style={{backgroundColor: getRandomHexColor()}} key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
                </StatListItem>
                ))}
            </StatList>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
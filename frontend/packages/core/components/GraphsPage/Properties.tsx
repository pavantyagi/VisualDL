import React, {FunctionComponent} from 'react';

import {Properties as PropertiesType} from '~/resource/graphs/types';
import Property from '~/components/GraphsPage/Property';
import {em} from '~/utils/style';
import styled from 'styled-components';
import {useTranslation} from '~/utils/i18n';

const Header = styled.div`
    font-size: ${em(16)};
    font-weight: 700;
    padding: ${em(10)} 0;
`;

type PropertiesProps = PropertiesType & {
    expand?: boolean;
    showNodeDodumentation?: () => unknown;
};

const Properties: FunctionComponent<PropertiesProps> = ({properties, groups, expand, showNodeDodumentation}) => {
    const {t} = useTranslation('graphs');

    return (
        <>
            {properties?.map((property, index) => (
                <Property
                    name={t(`graphs:properties.${property.name}`)}
                    values={property.values}
                    key={index}
                    showNodeDodumentation={showNodeDodumentation}
                />
            ))}
            {groups?.map((group, index) => (
                <React.Fragment key={index}>
                    <Header>{t(`graphs:properties.${group.name}`)}</Header>
                    {group.properties?.map((property, anotherIndex) => (
                        <Property
                            {...property}
                            key={anotherIndex}
                            expand={expand}
                            showNodeDodumentation={showNodeDodumentation}
                        />
                    ))}
                </React.Fragment>
            ))}
        </>
    );
};

export default Properties;

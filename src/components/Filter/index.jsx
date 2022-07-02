import React from 'react';
import { Container, Form, Icon, Advanced } from './style';
import { Input, Button } from '../Generic';
import { Popover } from 'antd';
const Filter = () => {
	const advancedSearch = (
		<Advanced>
			<Advanced.Title>address</Advanced.Title>
			<Advanced.Input>
				<Input width={'200px'} mr={20} placeholder={'Country'} />
				<Input width={'200px'} mr={20} placeholder={'Region'} />
				<Input width={'200px'} mr={20} placeholder={'City'} />
				<Input width={'200px'} placeholder={'Zip Code'} />
			</Advanced.Input>
			<Advanced.Title>apartment info</Advanced.Title>
			<Advanced.Input>
				<Input width="200px" mr={20} placeholder={'Rooms'} />
				<Input width="200px" mr={20} placeholder={'Size'} />
				<Input width="200px" placeholder={'Sort'} />
			</Advanced.Input>
			<Advanced.Title>price</Advanced.Title>
			<Advanced.Input>
				<Input width="200px" mr={20} placeholder={'Min price'} />
				<Input width="200px" placeholder={'Max price'} />
			</Advanced.Input>
		</Advanced>
	);
	return (
		<Container>
			<Form>
				<Input
					placeholder={'Enter an address, neighborhood, city, or ZIP code'}
					pl={'42px'}
				>
					<Icon.HomeLogo />
				</Input>
				<Popover
					placement="bottomRight"
					content={advancedSearch}
					trigger={'click'}
				>
					<Button ml={20} mr={20} width="160px" type={'secondary'}>
						<Icon.Setting /> Advanced
					</Button>
				</Popover>
				<Button width="190px" type={'primary'}>
					<Icon.Search /> Search
				</Button>
			</Form>
		</Container>
	);
};

export default Filter;

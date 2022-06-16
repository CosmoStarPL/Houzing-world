import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => height || '44px'};
	align-items: center;
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
	border: 1px solid #e6e9ec;
	border-radius: 2px;
`;
const Logo = styled.span`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 30px;
`;
const SearchInput = styled.input`
	width: 100%;
	padding-left: ${({ pl }) => pl || '14px'};
	outline: none;
	border: none;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #0d263b;
`;
export { Container, Logo, SearchInput };

import styled from '@emotion/styled';

export const UlFriendList = styled.ul`
display: flex;`

export const ItemFriendList = styled.li`
  list-style: none;
`;
export const SpanStatus = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const AvatarFriendList = styled.img`
  display: block;
`;

export const NameFriendList = styled.p`
  font-size: 20px;
`;

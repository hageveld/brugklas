import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { useDispatch, useSelector } from '../../hooks';
import moment from 'moment';

const { TextArea } = Input;

const getActionContent = (type: string) => {
    switch (type) {
        case 'update_contacted_true':
            return 'Gecontacteerd';
        case 'update_contacted_false':
            return 'Niet gecontacteerd';
        case 'delete_entry':
            return 'Verwijderd';
        default:
            return 'Status aangepast (onbekende wijziging)';
    }
};

interface Props {
    id: string;
}

const Comments: FunctionComponent<Props> = ({ id }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.admin.isLoggedIn);
    const name = useSelector(state => state.admin.name);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const entries = useSelector(state => state.admin.entries);
    const entry = entries.find((entryData: any) => entryData.id.toString() === id);

    const submitComment = () => {
        console.log(value);
    };

    const comments = [
        {
            author: 'Robot',
            avatar: <Avatar icon="robot" />,
            content: 'Aanmelding aangemaakt',
            datetime: moment(entry.timestamp)
                .locale('nl')
                .fromNow()
        },
        ...entry.events.map((event: any) => ({
            author: 'Gebruiker',
            avatar: <Avatar icon="user" />,
            content: getActionContent(event.action),
            datetime: moment(event.timestamp)
                .locale('nl')
                .fromNow()
        }))
    ];

    return (
        <div>
            {comments.length > 0 && (
                <List
                    dataSource={comments}
                    header={`${comments.length} ${comments.length > 1 ? 'notities' : 'notitie'}`}
                    itemLayout="horizontal"
                    renderItem={props => <Comment {...props} />}
                />
            )}
            <Comment
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <div>
                        <Form.Item>
                            <TextArea
                                rows={4}
                                onChange={(e: any) => setValue(e.target.value)}
                                value={value}
                                disabled={true}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                htmlType="submit"
                                loading={submitting}
                                onClick={() => submitComment()}
                                type="primary"
                                disabled={true}
                            >
                                Voeg notitie toe
                            </Button>
                        </Form.Item>
                    </div>
                }
            />
        </div>
    );
};

export default Comments;

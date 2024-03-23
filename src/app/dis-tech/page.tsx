"use client"

import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, TextField, Button, Paper, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box } from '@mui/material';

interface Comment {
    id: string;
    author: string;
    content: string;
    upvotes: number;
    downvotes: number;
}

const CommentSectionContainer = styled('div')({
    maxWidth: 650,
    margin: 'auto',
    marginTop: 70,
});

const CommentList = styled(Paper)({
    width: '100%',
    backgroundColor: '#f0f2f5',
});

const CommentForm = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '16px 0',
});

const SubmitButton = styled(Button)({
    marginTop: 6,
    backgroundColor: 'white',
    color: "black"
});
const CommentPaper = styled(Paper)({
    padding: 16,
    marginBottom: 8,
});

const CommentAuthor = styled(Typography)({
    fontWeight: 'bold',
});

const VoteContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});
const CommentListItem = styled(ListItem)({
    display: 'flex',
});

const CommentBox = styled(TextField)({
    marginTop: 16,
});
const CommentSection = () => {
    const [comments, setComments] = useState<Comment[]>([
        {
            id: '1',
            author: 'Warren Buffet',
            content: 'Nice plattform',
            upvotes: 15,
            downvotes: 2,
        },
        {
            id: '2',
            author: 'wallstreetmarkets',
            content: 'Nice platform, we gonna make a short squeeze!',
            upvotes: 30,
            downvotes: 1,
        }
    ]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        const commentToAdd: Comment = {
            id: Math.random().toString(36).substr(2, 9),
            author: 'User',
            content: newComment,
            upvotes: 0,
            downvotes: 0,
        };
        setComments([...comments, commentToAdd]);
        setNewComment('');
    };

    const handleUpvote = (id: string) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                return { ...comment, upvotes: comment.upvotes + 1 };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    const handleDownvote = (id: string) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                return { ...comment, downvotes: comment.downvotes - 1 };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    return (
        <CommentSectionContainer>
            {/* ... existing code */}
            <CommentList elevation={0}>
                <List>
                    {comments.map((comment, index) => (
                        <React.Fragment key={comment.id}>
                            <CommentListItem alignItems="flex-start">
                                <ListItemText
                                    primary={<CommentAuthor>{comment.author}</CommentAuthor>}
                                    secondary={<Typography color="textSecondary">{comment.content}</Typography>}
                                />
                                <Box>
                                    <VoteContainer>
                                        <IconButton onClick={() => handleUpvote(comment.id)} sx={{ color: 'green' }}>
                                            <ArrowUpwardIcon />
                                        </IconButton>
                                        <Typography>{comment.upvotes}</Typography>
                                        <IconButton onClick={() => handleDownvote(comment.id)} sx={{ color: 'red' }}>
                                            <ArrowDownwardIcon />
                                        </IconButton>
                                        <Typography>{comment.downvotes}</Typography>
                                    </VoteContainer>
                                </Box>
                            </CommentListItem>
                            {index < comments.length - 1 && <Divider variant="inset" component="li" />}
                        </React.Fragment>
                    ))}
                </List>
            </CommentList>
            <CommentForm>
                <CommentBox
                    label="What are your thoughts?"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    fullWidth
                />
                <SubmitButton
                    variant="contained"
                 //   color="primary"
                    onClick={handleAddComment}
                >
                    Comment
                </SubmitButton>
            </CommentForm>
        </CommentSectionContainer>
    );
};

export default CommentSection;

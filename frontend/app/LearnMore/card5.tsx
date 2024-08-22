import React, { useState } from "react";
import { Collapse, Typography, Card, CardActions, CardContent, Button } from "@mui/material";

const Card4 = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card sx={{
            margin: '20px',
            padding: '10px',
            // border: '1px solid #ccc',
            // borderRadius: '8px',
            // width: isExpanded1 ? '33.33%' : '10%',
            backgroundColor: '#FFFFE0',
            transition: 'width 0.5s'
        }}>
            <CardActions>
                <Button
                    // variant="contained"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ color: 'black', textAlign: 'left', flexDirection: 'column' }}
                >
                    <h2>
                        基于聚类的半监督KNN
                    </h2>
                    <p>
                        算法首先对未标记的样本进行聚类。
                        每个聚类中心代表该类未标记样本的平均标签。
                        然后，算法使用已标记的样本来为这些聚类中心“投票”，
                        从而为每个聚类分配一个标签，最终使用这些聚类标签来预测未标记样本的类别。
                        这种方法适用于聚类中心能够很好地代表未标记样本的情况。
                    </p>
                </Button>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>

                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Card4;
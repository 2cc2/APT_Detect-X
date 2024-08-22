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
            backgroundColor: '#E6E6FA',
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
                        基于传播的半监KNN
                    </h2>
                    <p>
                        算法使用已标记的样本来传播标签给未标记的样本。
                        算法首先构建一个图，其中节点代表数据点，边代表样本之间的相似性，
                        通过图的传播规则（如label propagation）或优化问题，
                        标签可以从已标记的节点传播到未标记的节点。
                        这种方法适用于标签传播成本较低，
                        即判断两个样本是否属于同一类别较为简单的情况。
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
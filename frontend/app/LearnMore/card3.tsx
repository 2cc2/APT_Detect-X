import React, { useState } from "react";
import { Collapse, Typography, Card, CardActions, CardContent, Button } from "@mui/material";

const Card3 = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card sx={{
            margin: '20px',
            padding: '10px',
            // border: '1px solid #ccc',
            // borderRadius: '8px',
            // width: isExpanded1 ? '33.33%' : '10%',
            backgroundColor: '#E0FFFF',
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
                        监督学习
                    </h2>
                    <h3>
                        针对有监督的学习任务，存在标记成本较为昂贵且标记难以大量获取的问题。
                        在此问题背景下，主动学习（Active Learning, AL）
                        尝试通过选择性的标记较少数据而训练出表现较好的模型。
                    </h3>
                </Button>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        <img src="/algorithm-introduce/lr4.png" alt="description" />
                        <p>
                            例如，此时我们有大量的猫和狗的数据，
                            假设人为标记他们的类别是成本非常高的事情，
                            这时需要用到主动学习从中挑选部分数据对他们进行标注以节约成本，
                            用主动模型选取出的标注数据训练的模型比随机选取出的相同数量的标注数据训练的模型精度更高。
                        </p>
                        <img src="/algorithm-introduce/lr5.png" alt="description" />
                        <p>
                            如图所示，图(a)是全部数据集，
                            图（c）中使用主动学习策略仅选取30个样本训练出的逻辑回归模型即可达到90%的准确率，
                            而图(b)中随机选取的30个样本训练出的模型却相对表现较差。
                        </p>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Card3;
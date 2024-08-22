import React, { useState } from "react";
import { Collapse, Typography, Card, CardActions, CardContent, Button } from "@mui/material";

const Card2 = () => {
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
                        半监督学习
                    </h2>
                    <h3>
                        机器学习算法通常分为监督学习和无监督学习两大类。
                        监督学习算法需要训练数据集中包含标记的输入输出对，
                        而无监督学习算法则是在没有任何标签信息的情况下寻找数据中的内在结构和模式。
                    </h3>
                </Button>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        {/* <p>
                            self-training是最简单的半监督方法之一，其主要思想是找到一种方法，
                            用未标记的数据集来扩充已标记的数据集。即首先用有标签数据训练一个分类器，
                            然后用这个分类器对无标签数据进行分类，这样就会产生伪标签（pseudo label）
                            或软标签（soft label），挑选一定标准的伪标签样本用来迭代训练分类器。
                        </p> */}
                        <img src="/algorithm-introduce/knn5.png" alt="description" style={{ width: '100%', height: 'auto' }} />
                        <p>
                            半监督学习是介于这两种学习方式之间的一种新兴的机器学习范式。
                            它利用少量标记数据和大量无标记数据来训练模型，
                            相比完全监督学习能够取得更好的性能。
                            现实世界中获取尿技术局往往需要大量的人工标注工作，
                            代价极高半监督学习在很多实际应用中都有广泛应用，
                            比如图像分类、自然语言处理、生物信息学等领域。
                        </p>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Card2;
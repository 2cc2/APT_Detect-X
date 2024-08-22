import React, { useState } from "react";
import { Collapse, Typography, Card, CardActions, CardContent, Button } from "@mui/material";

const Card1 = () => {
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
                    <h1>
                    自训练
                    </h1>
                    <h3>
                    self-training是最简单的半监督方法之一，其主要思想是找到一种方法，
                    用未标记的数据集来扩充已标记的数据集。即首先用有标签数据训练一个分类器，
                    然后用这个分类器对无标签数据进行分类，这样就会产生伪标签（pseudo label）
                    或软标签（soft label），挑选一定标准的伪标签样本用来迭代训练分类器。
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
                        <img src="/algorithm-introduce/knn4.png" alt="description" style={{ width: '100%', height: 'auto' }} />
                        <h2>
                            使用场景
                        </h2>
                        <p>
                            在现实生活中得到大量有标签数据需要大量时间经历，
                            而自训练是有标签数据+无标签数据混合成的训练数据中使用的深度学习算法，
                            可以利用自训练方法对无标记数据进行标记，实现己标记数据的扩充。
                        </p>
                        <h2>
                            优点
                        </h2>
                        <p>
                            自训练可扩展性、通用性和灵活性，
                            在每种条件设置下均能很好地发挥作用，
                            无论是少数据状态、多数据状态、弱数据增强还是强数据增强。
                            并且自训练不依赖于模型架构也不依赖于数据集
                        </p>
                        <h2>
                            缺点
                        </h2>
                        <p>
                            受标记样本分布和数量的限制，很难有效地发现高置信度无标记样本，
                            虽然目前已有较多半监督自训练算法，但这些算法所使用的基分类器都有自身的弱点，
                            自训练一般需要有标注样本与无标签样本的性质差异不能太大，
                            并且需要迭代多次，且几乎所有的发现高置信度无标记样本的方法都需要排序置信度值，
                            排序过程增加了计算时间，所以计算时间会较长。
                        </p>

                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Card1;
import React, { useState, useEffect } from 'react';
import {
    ChakraProvider,
    Box,
    Heading,
    Text,
    Link,
    VStack,
    Flex,
} from '@chakra-ui/react';

interface Article {
    title: string;
    description: string;
    url: string;
}

interface NewsCardProps {
    article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
    // Limiting the description to 100 characters for less text
    const shortDescription = article.description.slice(0, 100) + '...';

    return (
        <Box bg="black" p={4} borderRadius="md" boxShadow="md" w="100%" h="200px">
            <Heading as="h5" size="sm" mb={2} color="white">
                {article.title}
            </Heading>
            <Text fontSize="sm" mb={2} color="gray.400" noOfLines={2}>
                {shortDescription}
            </Text>
            <Link href={article.url} isExternal fontSize="sm" color="blue.300">
                Weiterlesen
            </Link>
        </Box>
    );
};

interface NewsBoxProps {
    category: string;
    country: string;
}

const NewsBox: React.FC<NewsBoxProps> = ({ category, country }) => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(
                    `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`
                );
                const data = await response.json();
                setArticles(data.articles.slice(0, 3)); // Limit to 3 articles
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, [category, country]);

    return (
        <VStack spacing={4}>
            {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </VStack>
    );
};
const App: React.FC = () => {
    return (
        <ChakraProvider>

                <div style={{  maxWidth: '300px', }}>
                    <NewsBox category="business" country="us" />
                </div>

        </ChakraProvider>
    );
};

export default App;
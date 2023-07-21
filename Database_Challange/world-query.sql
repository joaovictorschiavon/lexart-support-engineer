CREATE TABLE AverageLifeExpectancy AS SELECT AVG(LifeExpectancy) AS LifeProm, Continent AS Region FROM
    country
WHERE
    LifeExpectancy IS NOT NULL
GROUP BY Continent;


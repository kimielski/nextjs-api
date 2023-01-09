'use client'

import Link from 'next/link'
import styles from "../styles/Pagination.module.css";

import { currentPageAtom } from '../storage/atoms'
import { useAtom } from 'jotai'

const pageSize = 20;

const getCountriesList = (slicedCountries) => {
  return slicedCountries.map((country) => (
    <li key={country.alpha2Code}>
      <Link href={`/countries/${country.alpha3Code}`}>{country.name}</Link>
    </li>
  ));
}

const getPagination = (itemsCount, currentPage, setCurrentPage) => {

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <>
      <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => setCurrentPage(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {currentPage > 1  && <button onClick={() => setCurrentPage(currentPage - 1)}>previous</button>}
    {currentPage < pagesCount && <button onClick={() => setCurrentPage(currentPage + 1)}>next</button>}
    </>
  )
}

const sliceItems = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize); // 0, 9
}

const PaginationList = ({ items }) => {

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const slicedCountries = sliceItems(items, currentPage, pageSize);
  const listElements = getCountriesList(slicedCountries);
  const pagination = getPagination(items.length, currentPage, setCurrentPage);

  return (
    <>
      <h1>Countries</h1>
      <div>{ listElements }</div>
      <div>{ pagination }</div>
    </>
  );
};

export default PaginationList;
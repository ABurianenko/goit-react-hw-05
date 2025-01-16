import { Field, Form, Formik } from "formik";
import s from './SearchBar.module.css';

const SearchBar = ({handleChangeQuery, query}) => {
    const onSubmit = (values) => {
        console.log(values);
        
        handleChangeQuery(values.query)
    };

    const initialValues = {
        query,
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <Field className={s.searchInput} name='query'/>
                    <button className={s.searchButton} type='submit'>Search</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SearchBar;